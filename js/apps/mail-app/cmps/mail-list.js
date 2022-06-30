import mailPreview from './mail-preview.cmp.js'
import { mailService } from '../services/mail.service.js'

export default {
	template: `
        <section v-if="mails" class="">
            <ul class="mail-list clean-list">
                <li v-for="mail in mails ">
                    <mail-preview :mail="mail" @click="openMail(mail.id)" />
                </li>
            </ul>
        </section>
    `,

	props: ['mails'],

	data() {
		return {}
	},

	methods: {
		openMail(id) {
			this.$router.push(`/mail/${this.$route.params.status}/${id}`)
		},
	},
	computed: {},

	created() {},

	watch: {
		'$route.params.status': {
			handler(status) {
				// console.log(status)
			},
			immediate: true,
		},
	},

	components: {
		mailPreview,
	},
}
