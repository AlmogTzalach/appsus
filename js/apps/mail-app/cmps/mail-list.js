import mailPreview from './mail-preview.cmp.js'
import { mailService } from '../services/mail.service.js'

export default {
	template: `
        <section>
            <ul v-if="areMailsShown" class="mail-list clean-list">
                <li v-for="mail in mailsToShow" :key="mail.id">
                    <mail-preview :mail="mail"
						@click="openMail(mail.id)"
						@starred="toggleStar"
					/>
                </li>
            </ul>
			<div v-else class="no-mails-msg">No mails match your criteria</div>
        </section>
    `,

	props: ['mails'],

	data() {
		return {
			mailsToShow: null,
		}
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
			this.$emit('starred', id)
			const mail = this.mailsToShow.find((mail) => mail.id === id)
			mail.isStarred = !mail.isStarred
		},
	},
	computed: {
		areMailsShown() {
			if (!this.mailsToShow || !this.mailsToShow.length) return false
			return true
		},
	},

	maounted() {
		// this.mailsToShow = this.mails
	},

	watch: {
		'$route.params.status': {
			handler(status) {
				mailService.query(status).then((mails) => (this.mailsToShow = mails))
			},
			immediate: true,
		},
	},

	components: {
		mailPreview,
	},
}
