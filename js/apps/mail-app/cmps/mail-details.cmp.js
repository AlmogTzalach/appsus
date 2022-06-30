import { mailService } from '../services/mail.service.js'

export default {
	template: `
        <section v-if="mail" class="mail-details flex">
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

	methods: {},
	computed: {},

	created() {
		mailService.get(this.$route.params.mailId).then((mail) => (this.mail = mail))
	},

	components: {},
}
