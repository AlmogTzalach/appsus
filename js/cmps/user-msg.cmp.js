import { eventBus } from '../services/eventBus-service.js'
export default {
	template: `
        <section v-if="msg" class="isShowMsg user-msg">
            <p>{{msg.txt}}</p>
        </section>
    `,
	data() {
		return {
			unsubscribe: null,
			msg: null,
		}
	},
	created() {
		this.unsubscribe = eventBus.on('show-msg', this.showMsg)
	},
	methods: {
		showMsg(msg) {
			this.msg = msg
			setTimeout(() => {
				this.msg = null
			}, 2000)
		},
	},
	computed: {
		isShowMsg() {
			return this.msg ? 'show' : ''
		},
	},
	destroyed() {
		this.unsubscribe()
	},
}
