export default {
	template: `
        <section class="mail-preview">
            <div> {{ mail.from }} </div>
            <div> {{ mail.subject }} </div>
            <div> {{ mail.body }} </div>
            <div> {{ mail.created }} </div>
        </section>
    `,

	props: ['mail'],

	data() {
		return {}
	},
	methods: {},
	computed: {},
}
