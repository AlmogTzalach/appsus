import homePage from './views/home-page.cmp.js'
import keepApp from './apps/keep-app/keep-app.cmp.js'
import mailApp from './apps/mail-app/mail-app.cmp.js'
import mailList from './apps/mail-app/cmps/mail-list.js'
import mailDetails from './apps/mail-app/cmps/mail-details.cmp.js'
import mailCompose from './apps/mail-app/cmps/mail-compose.cmp.js'

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
		children: [
			{
				path: ':status',
				component: mailList,
			},
			{
				path: ':status/:mailId',
				component: mailDetails,
			},
			{
				path: 'compose',
				component: mailCompose,
			},
		],
	},
]

export const router = VueRouter.createRouter({
	routes,
	history: VueRouter.createWebHashHistory(),
})
