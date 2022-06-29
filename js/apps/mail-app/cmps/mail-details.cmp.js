export default {
	template: `
        <section class="mail-details flex">
            <h2> {{ mail.subject }} </h2>
            <h3> {{ mail.from }} </h3>
            <p> {{ mail.body }} </p>
        </section>
    `,

	props: ['mail'],

	data() {
		return {}
	},

	methods: {},
	computed: {},

	components: {},
}
