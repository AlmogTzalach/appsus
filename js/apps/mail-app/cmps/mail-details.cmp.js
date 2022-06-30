import { mailService } from '../services/mail.service.js'

export default {
	template: `
        <section v-if="mail" class="mail-details flex">
			<div class="mail-actions">
				<button @click="onBack">Back</button>
				<button @click="onStar">
					<span class="star-icon fa-star" :class="starType"></span> 
				</button>
				<button @click="onMark">Mark as read</button>
				<button @click="onDelete">Delete</button>

			</div>
            <h2> {{ mail.subject }} </h2>
            <h3> {{ mail.from }} </h3>
            <p> {{ mail.body }} </p>
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
	},

	created() {
		mailService.get(this.$route.params.mailId).then((mail) => (this.mail = mail))
	},

	components: {},
}
