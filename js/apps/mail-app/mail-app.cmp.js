import mailList from './cmps/mail-list.js'
import { mailService } from './services/mail.service.js'

export default {
	template: `
        <section>
            <mail-list :mails="mails" />
        </section>
    `,

	data() {
		return {
			mails: null,
		}
	},

	methods: {},
	computed: {},

	created() {
		mailService.query().then((mails) => (this.mails = mails))
	},

	components: {
		mailList,
	},
}
