import mailPreview from './mail-preview.cmp.js'

export default {
	template: `
        <section v-if="mails" class="">
            <ul class="mail-list clean-list">
                <li v-for="mail in mails" :key="mail.id">
                    <mail-preview :mail="mail"
						@click="openMail(mail.id)"
						@starred="toggleStar"
					/>
                </li>
            </ul>
        </section>
    `,

	props: ['mails'],

	data() {
		return {}
	},

	methods: {
		openMail(id) {
			this.$router.push(`/mail/${this.$route.params.status}/${id}`)

			// if an unread mail is opened, change its read status
			if (!this.mails.find((mail) => mail.id === id).isRead) {
				this.$emit('opened', id)
			}
		},
		toggleStar(id) {
			const mail = this.$emit('starred', id)
		},
	},
	computed: {},

	created() {},

	watch: {
		'$route.params.status': {
			handler(status) {
				// console.log(status)
			},
			immediate: true,
		},
	},

	components: {
		mailPreview,
	},
}
