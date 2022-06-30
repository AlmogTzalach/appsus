export default {
	template: `
          <section class="note-txt">
			  <h4>{{title}}</h4>
              <p>{{txt}}</p>
          </section>
          `,
	props: ['info'],
	data() {
		return {
			title: this.info.title,
			txt: this.info.txt,
		}
	},
	methods: {},
	computed: {},
}
