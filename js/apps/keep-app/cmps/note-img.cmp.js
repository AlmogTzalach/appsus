export default {
	template: `
          <section class="note-img">
              <h4 class="note-img-title">{{this.title}}</h4>
              <img :src="this.src" :alt="this.title">
          </section>
          `,
	props: ['info'],
	data() {
		return {
			title: this.info.title,
			src: this.info.src,
		}
	},
	methods: {},
	computed: {},
}
