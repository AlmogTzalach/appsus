export default {
	template: `
        <section class="edit-note-box">
            <input v-model="this.title" type="text" placeholder="Title" class="title-input">
            <hr>
            <textarea v-model="this.noteInfo" :placeholder="noteTypePlaceholder" cols="30" rows="10" class="note-input"></textarea>
            <div class="note-add-btns flex space-between">
                <button @click="onDiscardNote">Discard</button>
                <button @click="onSaveNote">Save</button>
            </div>
        </section>
    `,
	props: ['noteType', 'noteToEdit'],
	data() {
		return {
			title: null,
			noteInfo: null,
			id: null,
		}
	},
	methods: {
		onDiscardNote() {
			this.$emit('closeEditBox')
		},
		onSaveNote() {
			switch (this.noteType || this.noteToEdit.type) {
				case 'noteTxt':
					if (!this.noteInfo) {
						alert('Not a valid note')
						break
					}
					this.$emit('saveNote', {
						id: this.id,
						type: this.noteType || this.noteToEdit.type,
						info: { title: this.title, txt: this.noteInfo },
					})
					break
				case 'noteTodos':
					if (!this.noteInfo) {
						alert('Not a valid list')
						break
					}
					let todos = this.noteInfo.split(',')
					todos = todos.map(todo => {
						return { task: todo, isDone: false }
					})
					this.$emit('saveNote', {
						id: this.id,
						type: this.noteType || this.noteToEdit.type,
						info: { title: this.title, todos },
					})
					break
				case 'noteImg':
					if (!this.noteInfo) {
						alert('Not a valid image link')
						break
					}
					this.$emit('saveNote', {
						id: this.id,
						type: this.noteType || this.noteToEdit.type,
						info: { title: this.title, src: this.noteInfo },
					})
					break
				case 'noteVideo':
					if (!this.noteInfo.includes('watch?v=')) {
						alert('Not a valid Youtube link')
						break
					}
					let link = this.noteInfo
					link = link.replace('watch?v=', 'embed/')
					this.$emit('saveNote', {
						id: this.id,
						type: this.noteType || this.noteToEdit.type,
						info: { title: this.title, src: link },
					})
					break
			}
			this.$emit('closeEditBox')
		},
	},
	computed: {
		noteTypePlaceholder() {
			switch (this.noteType) {
				case 'noteTxt':
					return 'Type your text here...'
				case 'noteTodos':
					return 'Type your tasks here (separated by ",")'
				case 'noteImg':
					return 'Enter image URL'
				case 'noteVideo':
					return 'Enter a Youtube URL'
			}
		},
	},
	created() {
		if (this.noteToEdit) {
			this.title = this.noteToEdit.info.title
			this.id = this.noteToEdit.id
			this.noteInfo =
				this.noteToEdit.info.txt ||
				this.noteToEdit.info.src ||
				this.noteToEdit.info.todos.join(',')
		}
	},
}
