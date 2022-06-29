export default {
	template: `
		<header class="app-header">
			<div class="logo">
			<h3>Appsus</h3>
			</div>
			<nav class="nav-bar flex align-center">
				<router-link to="/">Home</router-link>
				<router-link to="/keep">Keep</router-link>
				<router-link to="/mail">Mail</router-link>
			</nav>
		</header>
		<hr />
	`,

	data() {
		return {}
	},
	methods: {},
	computed: {},
}
