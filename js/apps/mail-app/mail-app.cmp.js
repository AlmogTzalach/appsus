import { mailService } from './services/mail.service.js'
import mailList from './cmps/mail-list.js'
import mailSideNav from './cmps/mail-side-nav.cmp.js'

export default {
	template: `
        <section class="mail-container grid">
            <mail-side-nav :unreadCount="unreadMailsCount" />
			<router-view 
				:mails="mails"	
				@starred="toggleStar"
				@marked="toggleMark"
				@deleted="deleteMail"
				@opened="toggleMark"
				@mailSent="onMailSent"
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
			let mail = this.getMail(id)
			mail.isStarred = !mail.isStarred

			mailService.get(id).then((mail) => {
				mail.isStarred = !mail.isStarred
				mailService.update(mail)
			})
		},
		toggleMark(id) {
			let mail = this.getMail(id)
			mail.isRead = !mail.isRead

			mailService.get(id).then((mail) => {
				mail.isRead = !mail.isRead
				mailService.update(mail)
			})
		},
		deleteMail(id) {
			const idx = this.mails.findIndex((mail) => mail.id === id)
			this.mails.splice(idx, 1)

			mailService.remove(id)
		},
		onMailSent(mail) {
			this.mails.unshift(mail)
		},
		getMail(id) {
			return this.mails.find((mail) => mail.id === id)
		},
	},

	computed: {
		unreadMailsCount() {
			if (!this.mails) return 0
			const user = mailService.getUser()
			return this.mails.reduce((acc, curr) => {
				if (curr.to === user && !curr.isRead) acc++
				return acc
			}, 0)
		},
	},

	created() {
		mailService.query('all').then((mails) => (this.mails = mails))
	},

	components: {
		mailList,
		mailSideNav,
	},
}
