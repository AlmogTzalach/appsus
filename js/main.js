import appHeader from './cmps/app-header.cmp.js'
import { router } from './router.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
	template: `
		<section>
			<user-msg/>
			<div class="page-container">
				<app-header />
				<router-view />
			</div>
		</section>
	`,

	components: {
		appHeader,
		userMsg,
	},

	data() {
		return {}
	},
	methods: {},
	computed: {},
	created() {},
	unmounted() {},
}

const app = Vue.createApp(options)
app.use(router)
app.mount('#app')
