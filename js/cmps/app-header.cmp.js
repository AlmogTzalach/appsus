export default {
	template: `
		<header class="app-header flex space-between">
			<div class="logo">
			<h3>Appsus</h3>
			</div>
			<nav class="nav-bar flex align-center">
				<router-link class="menu-item" to="/">Home</router-link>
				<router-link class="menu-item" to="/keep">Keep</router-link>
				<router-link class="menu-item" to="/mail">Mail</router-link>
			</nav>
		</header>
	`,

	data() {
		return {}
	},
	methods: {},
	computed: {},
}
