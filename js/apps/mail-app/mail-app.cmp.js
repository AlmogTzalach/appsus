import { mailService } from './services/mail.service.js'
import mailList from './cmps/mail-list.js'
import mailSideNav from './cmps/mail-side-nav.cmp.js'

export default {
	template: `
        <section class="mail-container grid">
            <mail-side-nav />
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
		mailSideNav,
	},
}
