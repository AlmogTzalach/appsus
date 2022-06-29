import homePage from './views/home-page.cmp.js'
import keepApp from './apps/keep-app/keep-app.cmp.js'
import mailApp from './apps/mail-app/mail-app.cmp.js'

const routes = [
	{
		path: '/',
		component: homePage,
	},
	{
		path: '/keep',
		component: keepApp,
	},
	{
		path: '/mail',
		component: mailApp,
	},
]

export const router = VueRouter.createRouter({
	routes,
	history: VueRouter.createWebHashHistory(),
})
