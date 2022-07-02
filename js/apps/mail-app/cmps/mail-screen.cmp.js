export default {
	template: `<section class="mail-screen" :class="screenClass"></section>`,

	props: ['isShown'],

	computed: {
		screenClass() {
			return this.isShown ? 'screen-open' : ''
		},
	},
}
