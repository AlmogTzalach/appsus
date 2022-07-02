export default {
	template: `
        <section class="side-bar flex" :class="sidbarClass">
            <button class="compose-btn" @click="onCompose"><span class="fa-solid fa-pencil"></span> Compose</button>
            <div><router-link to="/mail/inbox"><span class="fa-solid fa-inbox" /> {{ inboxText }}</router-link></div>
            <div><router-link to="/mail/starred"><span class="fa-solid fa-star" />Starred</router-link></div>
            <div><router-link to="/mail/sent"><span class="fa-solid fa-paper-plane" />Sent</router-link></div>
            <div><router-link to="/mail/drafts"><span class="fa-solid fa-file" />Drafts</router-link></div>
            <div><router-link to="/mail/trash"><span class="fa-solid fa-trash" />Trash</router-link></div>
        </section>
    `,

	props: ['unreadCount', 'isShown'],

	methods: {
		onCompose() {
			this.$router.push('/mail/compose')
		},
	},
	computed: {
		inboxText() {
			let txt = 'Inbox'
			if (this.unreadCount) txt += ` (${this.unreadCount})`
			return txt
		},
		sidbarClass() {
			return this.isShown ? 'side-open' : ''
		},
	},

	created() {},

	components: {},
}
