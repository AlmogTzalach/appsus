import { mailService } from '../services/mail.service.js'
import mailPreview from './mail-preview.cmp.js'
import mailFilter from './mail-filter.cmp.js'

export default {
	template: `
        <section>
			<mail-filter 
				@searched="onSearch"
				@sorted="onSort"
				:status="$route.params.status"
			/>

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
			searchTxt: '',
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
		onSearch(searchTxt) {
			const status = this.$route.params.status
			mailService.query(status, searchTxt).then((mails) => (this.mailsToShow = mails))
		},
		onSort(sortBy) {
			this.mailsToShow = this.mailsToShow.sort((m1, m2) => {
				const d1 = new Date(m1.created)
				const d2 = new Date(m2.created)
				if (sortBy === 'date-new') return d2 - d1
				else if (sortBy === 'date-old') return d1 - d2
				else if (sortBy === 'subject-normal') return m1.subject.localeCompare(m2.subject)
				else if (sortBy === 'subject-reverse') return m2.subject.localeCompare(m1.subject)
			})
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
				this.$emit('closeSide')
			},
			immediate: true,
		},
	},

	components: {
		mailPreview,
		mailFilter,
	},
}
