import { mailService } from '../services/mail.service.js'
import { eventBus } from '../../../services/eventBus-service.js'

export default {
	template: `
        <section v-if="mail" class="mail-details flex column">
			<div class="mail-actions">
				<button @click="onBack" title="Back"><span class="fa-solid fa-arrow-left"></span></button>
				<button @click="onStar" :title="starTitle">
					<span class="star-icon fa-star" :class="starType"></span> 
				</button>
				<button @click="onMark" title="Mark as unread"><span class="fa-solid fa-envelope-open-text"></span></button>
				<button @click="onSendToNotes" title="Save as note"><span class="fa-solid fa-file"></span></button>
				<button @click="onDelete" title="Delete"><span class="fa-solid fa-trash"></span></button>

			</div>

			<div class="mail-content flex column">
				<h2> {{ mail.subject }} </h2>
				<h3>from: {{ mail.from }} </h3>
				<h4>to: {{ mail.to }} </h4>
				<p> {{ mail.body }} </p>
			</div>
        </section>
    `,

	props: [],

	data() {
		return {
			mail: null,
		}
	},

	methods: {
		onBack() {
			this.$router.push('/mail/' + this.$route.params.status)
		},
		onStar() {
			this.mail.isStarred = !this.mail.isStarred
			this.$emit('starred', this.mail.id)
		},
		onMark() {
			this.$emit('marked', this.mail.id)
			eventBus.emit('show-msg', {
				txt: 'Marked as unread',
				type: 'success',
			})
			// return to mail after marking mail as unread
			this.onBack()
		},
		onSendToNotes() {
			this.$router.push(`/keep?title=${this.mail.subject || ''}&txt=${this.mail.body || ''}`)
		},
		onDelete() {
			this.$emit('deleted', this.mail.id)
			this.onBack()
		},
	},
	computed: {
		starType() {
			return this.mail.isStarred ? 'fa-solid' : 'fa-regular'
		},
		starTitle() {
			return this.mail.isStarred ? 'Unstar' : 'Star'
		},
	},

	created() {
		mailService.get(this.$route.params.mailId).then((mail) => (this.mail = mail))
	},

	components: {},
}
