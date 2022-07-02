export default {
	template: `
        <section class="edit-note-box">
			<form @submit.prevent="onSaveNote">
				<input v-model="this.title" type="text" placeholder="Title" class="title-input">
				<hr>
				<textarea v-model="this.noteInfo" :placeholder="noteTypePlaceholder" cols="30" rows="10" class="note-input" required></textarea>
				<div class="note-edit-btns flex space-between">
					<input type="button" @click="onDiscardNote" value="Discard">
					<!-- <button @click="onSaveNote">Save</button> -->
					<input type="submit" value="Save">
				</div>
			</form>
        </section>
    `,
	props: ['noteType', 'noteToEdit'],
	data() {
		return {
			title: null,
			noteInfo: null,
			id: null,
			isPinned: false,
		}
	},
	methods: {
		onDiscardNote() {
			this.$emit('closeEditBox')
		},
		onSaveNote() {
			switch (this.noteType || this.noteToEdit.type) {
				case 'noteTxt':
					this.$emit('saveNote', {
						id: this.id,
						isPinned: this.isPinned,
						type: this.noteType || this.noteToEdit.type,
						info: { title: this.title, txt: this.noteInfo },
					})
					break
				case 'noteTodos':
					let todos = this.noteInfo.split(',')
					todos = todos.map(todo => {
						return { task: todo, isDone: false }
					})
					this.$emit('saveNote', {
						id: this.id,
						isPinned: this.isPinned,
						type: this.noteType || this.noteToEdit.type,
						info: { title: this.title, todos },
					})
					break
				case 'noteImg':
					this.$emit('saveNote', {
						id: this.id,
						isPinned: this.isPinned,
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
						isPinned: this.isPinned,
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
			this.isPinned = this.noteToEdit.isPinned
			this.noteInfo =
				this.noteToEdit.info.txt ||
				this.noteToEdit.info.src ||
				this.noteToEdit.info.todos
					.map(todo => {
						return todo.task
					})
					.join(',')
		}
	},
}
