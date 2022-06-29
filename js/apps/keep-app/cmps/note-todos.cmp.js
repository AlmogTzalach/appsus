export default {
	template: `
          <section class="note-todos">
              <ul class="todo-list">
                <li v-for="(todo,idx) in todos" :class="{done: todo.isDone}">{{todo.task}}</li>
              </ul>
          </section>
          `,
	props: ['info'],
	data() {
		return {
			todos: this.info.todos,
		}
	},
	methods: {},
	computed: {},
}
