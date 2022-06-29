export default {
	template: `
          <section class="note-txt">
              <p>{{txt}}</p>
          </section>
          `,
	props: ['info'],
	data() {
		return {
			txt: this.info.txt,
		}
	},
	methods: {},
	computed: {},
}
