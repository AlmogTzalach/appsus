import mailPreview from './mail-preview.cmp.js'

export default {
	template: `
        <section>
            <ul>
                <li v-for="mail in mails">
                    <mail-preview :mail="mail" />
                </li>
            </ul>
        </section>
    `,

	props: ['mails'],

	data() {
		return {}
	},

	methods: {},
	computed: {},

	components: {
		mailPreview,
	},
}
