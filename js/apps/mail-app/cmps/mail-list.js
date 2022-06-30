import mailPreview from './mail-preview.cmp.js'
import { mailService } from '../services/mail.service.js'

export default {
	template: `
        <section v-if="mails" class="">
            <ul class="mail-list clean-list">
                <li v-for="mail in mails ">
                    <mail-preview :mail="mail" @click="goToMail(mail.id)" />
                </li>
            </ul>
        </section>
    `,

	// props: ['mails'],

	data() {
		return {
			mails: null,
		}
	},

	methods: {
		goToMail(id) {
			this.$router.push('/mail/' + id)
		},
	},
	computed: {},

	created() {
		mailService.query().then((mails) => (this.mails = mails))
	},

	components: {
		mailPreview,
	},
}
