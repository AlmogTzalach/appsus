export default {
	template: `
          <section class="note-video">
                <h4 class="video-title">{{this.title}}</h4>
                <iframe width="330" height="315"
                :src="this.src">
                </iframe>
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
