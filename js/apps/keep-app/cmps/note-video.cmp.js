export default {
	template: `
          <section class="note-video">
                <h4 class="video-title">{{this.title}}</h4>
				<div class="video-container">
					<iframe class="responsive-iframe"
						:src="this.src">
					</iframe>
				</div>
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
