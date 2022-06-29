import { keepService } from '../../services/keep-service.js'
import noteTxt from './cmps/note-txt.cmp.js'
import noteTodos from './cmps/note-todos.cmp.js'
import noteImg from './cmps/note-img.cmp.js'

export default {
	template: `
        <section class="notes-list-container grid">
            <div class="note-container" v-for="(note, idx) in notes" :key="note.id">
                <component :is="note.type" :info="note.info"></component>
            </div>
        </section>
    `,
	data() {
		return {
			notes: null,
		}
	},
	components: { noteTxt, noteTodos, noteImg },
	methods: {},
	computed: {},
	created() {
		this.notes = keepService.query().then(notes => (this.notes = notes))
	},
}
