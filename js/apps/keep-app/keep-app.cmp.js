import { keepService } from '../../services/keep-service.js'
import notePreview from './cmps/note-preview.cmp.js'
import addNoteBar from './cmps/add-note-bar.cmp.js'

export default {
	template: `
        <section class="keep-main-layout flex column align-center">
			<add-note-bar @saveNote="saveNote"></add-note-bar>
            <ul class="notes-list-container clean-list">
                <li v-for="(note, idx) in notes" :key="note.id">
                    <note-preview :note="note" @colorNote="changeNoteClr" @remove="removeNote" @updateInfo="updateInfo"></note-preview>
                </li>
            </ul>
        </section>
    `,
	data() {
		return {
			notes: null,
		}
	},
	components: { notePreview, addNoteBar },
	methods: {
		saveNote(note) {
			keepService.save(note).then(note => {
				this.notes.unshift(note)
			})
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
		this.notes = keepService.query().then(notes => (this.notes = notes))
	},
}
