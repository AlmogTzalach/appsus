import { mailService } from '../services/mail.service.js'

export default {
	template: `
        <section class="mail-preview grid" :class="isRead">
			<div class="star-icon-container" @click.stop="onStar">
				<span class="star-icon fa-star" :class="starType" ></span>
			</div>
            <div class=address> {{ computedAddress }} </div>
            <div class="mail-txt">
                <span class="subject"> {{ mail.subject }} </span>
                <span> - </span>
                <span class="content"> {{ mail.body }} </span>
            </div>
            <div class="date"> {{ computedDate }} </div>
        </section>
    `,

	props: ['mail'],

	data() {
		return {}
	},
	methods: {
		onStar() {
			this.$emit('starred', this.mail.id)
		},
	},
	computed: {
		computedAddress() {
			const username = mailService.getUser()
			return username === this.mail.to ? this.mail.from : 'To: ' + this.mail.to
		},
		computedDate() {
			const date = new Date(this.mail.created)
			const currDate = new Date()
			// if the time is less than 18 hours before now
			if (currDate - date < 1000 * 60 * 60 * 18) {
				return date.toLocaleString('default', { timeStyle: 'short' })
			}
			return date.toLocaleString('default', { day: 'numeric', month: 'short' })
		},
		isRead() {
			return this.mail.isRead ? 'read' : 'unread'
		},
		starType() {
			return this.mail.isStarred ? 'fa-solid' : 'fa-regular'
		},
	},
}
