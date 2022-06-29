import noteTxt from './note-txt.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'

export default {
	template: `
        <section>
                <component class="note-container" :is="note.type" :info="note.info"></component>
                
        </section>
    `,
	props: ['note'],
	data() {
		return {}
	},
	components: { noteTxt, noteTodos, noteImg },
	methods: {},
	computed: {},
	created() {},
}
