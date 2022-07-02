import { mailService } from './services/mail.service.js'
import { eventBus } from '../../services/eventBus-service.js'
import mailList from './cmps/mail-list.js'
import mailSideNav from './cmps/mail-side-nav.cmp.js'
import mailHamburger from './cmps/mail-hamburger.cmp.js'
import mailScreen from './cmps/mail-screen.cmp.js'

export default {
	template: `
        <section class="mail-container grid">
			<mail-hamburger @click="onHamburger" />
			<mail-screen :isShown="isSidebarShown" @click="closeSide" />

            <mail-side-nav :unreadCount="unreadMailsCount" :isShown="isSidebarShown"/>
			
			<router-view 
				:mails="mails"	
				@starred="toggleStar"
				@marked="toggleMark"
				@deleted="deleteMail"
				@opened="toggleMark"
				@mailSent="onMailSent"
				@closeSide="closeSide"
			/>
        </section>
    `,

	data() {
		return {
			mails: null,
			isSidebarShown: false,
		}
	},

	methods: {
		onHamburger() {
			this.isSidebarShown = !this.isSidebarShown
		},
		closeSide() {
			this.isSidebarShown = false
		},
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
			const mail = this.getMail(id)
			if (mail.isTrashed) {
				const idx = this.mails.findIndex((mail) => mail.id === id)
				this.mails.splice(idx, 1)
				mailService.remove(id)
				eventBus.emit('show-msg', {
					txt: 'Mail deleted',
					type: 'success',
				})
			} else {
				mail.isTrashed = true
				mailService.update(mail)
				eventBus.emit('show-msg', {
					txt: 'Mail moved to trash',
					type: 'success',
				})
			}
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
		mailHamburger,
		mailList,
		mailSideNav,
		mailScreen,
	},
}
