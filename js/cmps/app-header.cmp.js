export default {
	template: `
		<header class="app-header flex space-between align-center">
			<router-link to="/">
				<div class="logo flex align-center">
					<img src="./assets/horse-head-logo.svg" alt="Horse logo">
					<h3>Appsus</h3>
				</div>
			</router-link>
			<nav class="nav-bar flex align-center">
				<router-link to="/keep"><span class="fa-solid fa-file" title="Notes"></span></router-link>
				<router-link to="/mail/inbox"><span class="fa-solid fa-envelope" title="Mail"></span></router-link>
				<router-link to="/mail/inbox"><span class="fa-solid fa-book" title="Books"></span></router-link>
			</nav>
		</header>
	`,

	data() {
		return {}
	},
	methods: {},
	computed: {},
}
