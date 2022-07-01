export default {
	template: `
		<section class="mail-compose">
            <button @click="onBack" title="Back" class="back-btn">
                <span class="fa-solid fa-arrow-left"></span>
            </button>

            <form @submit.prevent="onSend" class="compose-form flex column">
                <input type="text" placeholder="Subject" class="compose-subject" />
                <input type="text" placeholder="To" class="compose-to" />
                <textarea type="text" placeholder="Mail content" class="compose-text" />
                <input type="submit" value="Send" class="compose-send" />
            </form>
		</section>
	`,

	data() {
		return {}
	},

	methods: {
		onBack() {
			this.$router.push('/mail/inbox')
		},
		onSend() {},
	},

	computed: {},
	created() {},
	unmounted() {},
}
