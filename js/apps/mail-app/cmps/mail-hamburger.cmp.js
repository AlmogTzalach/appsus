export default {
	template: `
        <section class="mail-hamburger" :class="hamburgerClass">
            <span class="fa-solid fa-bars"></span>
        </section>
    `,

	data() {
		return {
			isShown: true,
		}
	},

	computed: {
		hamburgerClass() {
			return this.isShown ? 'hamburger-shown' : ''
		},
	},

	watch: {
		'$route.params': {
			handler(params) {
				if (!params.status || params.mailId) this.isShown = false
				else this.isShown = true
			},
			immediate: true,
			deep: true,
		},
	},
}
