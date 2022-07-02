import { mailService } from '../services/mail.service.js'
import { eventBus } from '../../../services/eventBus-service.js'

export default {
	template: `
		<section class="mail-compose">
            <button @click="onBack" title="Back" class="back-btn">
                <span class="fa-solid fa-arrow-left"></span>
            </button>

            <form @submit.prevent="onSend" class="compose-form flex column">
                <input type="text" placeholder="Subject" class="compose-subject" v-model="subject" />
                <input type="email" placeholder="To" class="compose-to" required v-model="to" />
                <textarea type="text" placeholder="Mail content" rows="15" class="compose-text" v-model="body" />
                <input type="submit" value="Send" class="compose-send" />
            </form>
		</section>
	`,

	data() {
		return {
			subject: '',
			to: '',
			body: '',
		}
	},

	methods: {
		onBack() {
			this.$router.push('/mail/inbox')
		},
		onSend() {
			const subject = this.subject || '(no subject)'
			const mail = mailService.createMailToSend(subject, this.body, this.to)
			this.$router.push('/mail/sent')
			this.$emit('mailSent', mail)
			eventBus.emit('show-msg', {
				txt: 'Mail sent',
				type: 'success',
			})
		},
	},

	watch: {
		'$route.query': {
			handler(query) {
				if (!query) return
				if (query.title) this.subject = query.title
				if (query.txt) this.body = query.txt.replaceAll('~', '\n')
			},
			immediate: true,
		},
	},
}
