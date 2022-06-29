import mailPreview from './mail-preview.cmp.js'

export default {
	template: `
        <section class="">
            <ul class="mail-list clean-list">
                <li v-for="mail in mails ">
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
