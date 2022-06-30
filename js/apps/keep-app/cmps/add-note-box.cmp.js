export default {
	template: `
        <section class="add-note-box">
            <input v-model="this.title" type="text" placeholder="Title" class="title-input">
            <hr>
            <textarea v-model="this.noteInfo" :placeholder="noteTypePlaceholder" cols="30" rows="10" class="note-input"></textarea>
            <div class="note-add-btns flex space-between">
                <button>Discard</button>
                <button @click="onSaveNote">Save</button>
            </div>
        </section>
    `,
	props: ['noteType'],
	data() {
		return {
			title: null,
			noteInfo: null,
		}
	},
	methods: {
		onSaveNote() {
			switch (this.noteType) {
				case 'noteTxt':
					this.$emit('saveNote', {
						type: this.noteType,
						info: { title: this.title, txt: this.noteInfo },
					})
					break
				case 'noteTodos':
					let todos = this.noteInfo.split(',')
					todos = todos.map(todo => {
						return { task: todo, isDone: false }
					})
					this.$emit('saveNote', {
						type: this.noteType,
						info: { title: this.title, todos },
					})
					break
				case 'noteImg':
					this.$emit('saveNote', {
						type: this.noteType,
						info: { title: this.title, src: this.noteInfo },
					})
					break
				case 'noteVideo':
					// https://www.youtube.com/watch?v=gofICZUqltY
					this.$emit('saveNote', {
						type: this.noteType,
						info: { title: this.title, src: this.noteInfo },
					})
					break
			}
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
	created() {},
}
