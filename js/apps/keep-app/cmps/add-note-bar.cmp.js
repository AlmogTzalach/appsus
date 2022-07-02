import editNoteBox from './edit-note-box.cmp.js'

export default {
	template: `
        <section class="add-note-container flex column align-center">
            <div v-if="!isEditOrAdd" class="add-note-bar flex space-between" @click="changeNoteType('noteTxt')">
                <span>Take a note...</span>
            </div>
            <edit-note-box v-if="isEditOrAdd" @changeNoteType="changeNoteType" :noteToEdit="this.noteToEdit" :noteType="this.noteType" @saveNote="onSaveNote" @closeEditBox="closeEditBox"></edit-note-box>
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
		},
	},
	created() {},
	watch: {},
}
