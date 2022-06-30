export default {
	template: `
          <section class="note-todos">
		      <h4>{{title}}</h4>
              <ul class="todo-list">
                <li v-for="(todo,idx) in todos" :class="{done: todo.isDone}" @click="toggleDone(idx)">{{todo.task}}</li>
              </ul>
          </section>
          `,
	props: ['info'],
	data() {
		return {
			title: this.info.title,
			todos: this.info.todos,
		}
	},
	methods: {
		toggleDone(idx) {
			this.todos[idx].isDone = !this.todos[idx].isDone
			this.$emit('updateInfo', { title: this.title, todos: this.todos })
		},
	},
	computed: {},
}
