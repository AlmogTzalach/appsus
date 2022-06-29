import { keepService } from '../../services/keep-service.js'
import notePreview from './cmps/note-preview.cmp.js'

export default {
	template: `
        <section class="notes-list-container grid">
            <note-preview v-for="(note, idx) in notes" :key="note.id" :note="note"></note-preview>
        </section>
    `,
	data() {
		return {
			notes: null,
		}
	},
	components: { notePreview },
	methods: {},
	computed: {},
	created() {
		this.notes = keepService.query().then(notes => (this.notes = notes))
	},
}
