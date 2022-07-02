import { keepService } from '../../services/keep-service.js'
import notePreview from './cmps/note-preview.cmp.js'
import addNoteBar from './cmps/add-note-bar.cmp.js'
import searchBar from './cmps/search-bar.cmp.js'

export default {
	template: `
		<section class="flex column align-center">
			<section class="keep-main-layout flex column align-center">
				<search-bar @filtered="setFilter"></search-bar>
				<add-note-bar @saveNote="saveNote" :noteToEdit="noteToEdit" @closeEditBox="closeEditBox"></add-note-bar>
				<ul class="notes-list-container clean-list">
					<li v-for="(note, idx) in notesForDisplay" :key="note.id">
						<note-preview :note="note" @colorNote="changeNoteClr" @copyNote="copyNote" @removeNote="removeNote" @pinNote="pinNote" @updateInfo="updateInfo" @editNote="editNote"></note-preview>
					</li>
				</ul>
			</section>
		</section>
    `,
	data() {
		return {
			notes: null,
			noteToEdit: null,
			filterBy: null,
		}
	},
	components: { notePreview, addNoteBar, searchBar },
	methods: {
		setFilter(filterBy) {
			this.filterBy = filterBy
		},
		closeEditBox() {
			this.noteToEdit = null
		},
		copyNote(id) {
			const note = this.notes.find(note => note.id === id)
			const idx = this.notes.findIndex(note => note.id === id)
			keepService
				.save(note)
				.then(copiedNote => this.notes.splice(idx, 0, copiedNote))
		},
		pinNote(id) {
			const note = this.notes.find(note => note.id === id)
			const idx = this.notes.findIndex(note => note.id === id)
			note.isPinned = !note.isPinned
			this.notes.splice(idx, 1)
			if (note.isPinned) this.notes.unshift(note)
			else this.notes.push(note)
			keepService.update(note).then(note => console.log(note))
		},
		editNote(note) {
			this.noteToEdit = note
		},
		saveNote(note) {
			if (!note.id) {
				keepService.save(note).then(note => {
					this.notes.unshift(note)
				})
			} else {
				keepService.update(note).then(() => {
					this.notes = null
					keepService.query().then(notes => {
						this.notes = notes
					})
				})
			}
		},
		removeNote(id) {
			keepService.remove(id).then(() => {
				const idx = this.notes.findIndex(note => note.id === id)
				this.notes.splice(idx, 1)
			})
		},
		changeNoteClr(id, color) {
			const note = this.notes.find(note => note.id === id)
			note.bgClr = color
			keepService.update(note).then(note => console.log(note))
		},
		updateInfo(id, newInfo) {
			const note = this.notes.find(note => note.id === id)
			note.info = newInfo
			keepService.update(note).then(note => console.log(note))
		},
	},
	computed: {
		notesForDisplay() {
			let notes = this.notes
			if (this.filterBy?.noteType) {
				notes = notes.filter(note => note.type === this.filterBy.noteType)
			}

			if (this.filterBy?.searchWord) {
				const regex = new RegExp(this.filterBy.searchWord, 'i')
				notes = notes.filter(note => {
					if (regex.test(note.info.title)) return true
					if (note.info.txt && regex.test(note.info.txt)) return true
					if (note.info.todos) {
						return note.info.todos.some(todo => regex.test(todo.task))
					}
				})
			}
			return notes
		},
	},
	created() {
		keepService.query().then(notes => {
			const pinnedNotes = notes.filter(note => {
				if (note.isPinned) return note
				else return
			})
			const unpinnedNotes = notes.filter(note => {
				if (!note.isPinned) return note
				else return
			})
			let allNotes = []
			if (pinnedNotes.length) allNotes.push(...pinnedNotes)
			if (unpinnedNotes.length) allNotes.push(...unpinnedNotes)
			this.notes = allNotes
		})
	},
}
