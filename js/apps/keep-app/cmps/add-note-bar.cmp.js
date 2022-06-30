import addNoteBox from './add-note-box.cmp.js'

export default {
	template: `
        <section class="add-note-container flex column align-center">
            <div class="add-note-bar flex space-between">
                <span>Take a note...</span>
                <div class="note-type-select">
                        <ul class="note-types clean-list flex space-around">
                            <li class="fa-solid fa-comment" @click="changeNoteType('noteTxt')"></li>
                            <li class="fa-solid fa-list" @click="changeNoteType('noteTodos')"></li>
                            <li class="fa-solid fa-image" @click="changeNoteType('noteImg')"></li>
                            <li class="fa-brands fa-youtube" @click="changeNoteType('noteVideo')"></li>
                        </ul>
                </div>
            </div>
            <add-note-box v-if="this.noteType" :noteType="this.noteType" @saveNote="onSaveNote"></add-note-box>
        </section>
    `,
	components: { addNoteBox },
	data() {
		return {
			noteType: null,
		}
	},
	methods: {
		changeNoteType(type) {
			this.noteType = type
		},
		onSaveNote(note) {
			this.$emit('saveNote', note)
		},
	},
	computed: {},
	created() {},
}
