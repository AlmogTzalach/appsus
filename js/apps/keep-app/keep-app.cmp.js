import { keepService } from '../../services/keep-service.js'
import notePreview from './cmps/note-preview.cmp.js'
import addNoteBar from './cmps/add-note-bar.cmp.js'

export default {
	template: `
		<section class="flex column align-center">
			<section class="keep-main-layout flex column align-center">
				<add-note-bar @saveNote="saveNote" :noteToEdit="noteToEdit" @closeEditBox="closeEditBox"></add-note-bar>
				<ul class="notes-list-container clean-list">
					<li v-for="(note, idx) in notes" :key="note.id">
						<note-preview :note="note" @colorNote="changeNoteClr" @removeNote="removeNote" @updateInfo="updateInfo" @editNote="editNote"></note-preview>
					</li>
				</ul>
			</section>
		</section>
    `,
	data() {
		return {
			notes: null,
			noteToEdit: null,
		}
	},
	components: { notePreview, addNoteBar },
	methods: {
		closeEditBox() {
			this.noteToEdit = null
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
	computed: {},
	created() {
		keepService.query().then(notes => (this.notes = notes))
	},
}
