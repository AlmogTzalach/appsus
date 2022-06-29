import appFooter from './cmps/app-footer.cmp.js'
import appHeader from './cmps/app-header.cmp.js'
import { router } from './router.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
  template: `
        <section>
            <app-header class="main-header"/>
            <user-msg/>
            <router-view class="main-content"/>
            <app-footer class="main-footer"/>
        </section>
            `,
  components: { appHeader, appFooter, userMsg },
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
