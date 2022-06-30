import { mailService } from './services/mail.service.js'
import mailList from './cmps/mail-list.js'
import mailSideNav from './cmps/mail-side-nav.cmp.js'

export default {
	template: `
        <section class="mail-container grid">
            <mail-side-nav />
            <!-- <mail-list :mails="mails" /> -->
			<router-view 
				:mails="mails" 
				@starred="toggleStar"
				@marked="toggleMark"
				@deleted="deleteMail"
			/>
        </section>
    `,

	data() {
		return {
			mails: null,
		}
	},

	methods: {
		toggleStar(id) {
			this.getMail(id).isStarred = !this.getMail(id).isStarred
		},
		toggleMark(id) {
			this.getMail(id).isRead = !this.getMail(id).isRead
		},
		deleteMail(id) {},
		getMail(id) {
			return this.mails.find((mail) => mail.id === id)
		},
	},
	computed: {},

	created() {
		mailService.query().then((mails) => (this.mails = mails))
	},

	components: {
		mailList,
		mailSideNav,
	},
}
