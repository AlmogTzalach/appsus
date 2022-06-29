import { keepService } from '../../services/keep-service.js'
import notePreview from './cmps/note-preview.cmp.js'

export default {
	template: `
        <section >
            <ul class="notes-list-container grid clean-list">
                <li v-for="(note, idx) in notes" :key="note.id">
                    <note-preview :note="note" @color="changeNoteClr" @remove="removeNote"></note-preview>
                </li>
            </ul>
        </section>
    `,
	data() {
		return {
			notes: null,
		}
	},
	components: { notePreview },
	methods: {
		removeNote(id) {
			keepService.remove(id).then(() => {
				const idx = this.notes.findIndex(note => note.id === id)
				this.notes.splice(idx, 1)
			})
		},
		changeNoteClr(id) {
			const note = this.notes.find(note => note.id === id)
			keepService.update(note).then(() => {})
		},
	},
	computed: {},
	created() {
		this.notes = keepService.query().then(notes => (this.notes = notes))
	},
}
