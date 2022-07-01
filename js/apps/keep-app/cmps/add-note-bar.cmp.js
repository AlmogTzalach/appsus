import editNoteBox from './edit-note-box.cmp.js'

export default {
	template: `
        <section class="add-note-container flex column align-center">
            <div v-if="!isEditOrAdd" class="add-note-bar flex space-between">
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
            <edit-note-box v-if="isEditOrAdd" :noteToEdit="this.noteToEdit" :noteType="this.noteType" @saveNote="onSaveNote" @closeEditBox="closeEditBox"></edit-note-box>
        </section>
    `,
	components: { editNoteBox },
	props: ['noteToEdit'],
	data() {
		return {
			noteType: null,
		}
	},
	methods: {
		closeEditBox() {
			this.noteType = null
			this.$emit('closeEditBox')
		},
		changeNoteType(type) {
			this.noteType = type
		},
		onSaveNote(note) {
			this.$emit('saveNote', note)
		},
	},
	computed: {
		isEditOrAdd() {
			if (this.noteToEdit || this.noteType) return true
			// return { true: this.noteToEdit || this.noteType }
		},
	},
	created() {},
	watch: {},
}
