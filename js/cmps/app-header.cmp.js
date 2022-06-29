export default {
  template: `
          <header class="app-header flex space-between">
              <div class="logo">
                  <h3>Miss-Book</h3>
              </div>
              <nav class="nav-bar flex align-center">
                  <router-link class="menu-item" to="/">Home</router-link>
                  <router-link class="menu-item" to="/book">Books</router-link>
                  <router-link class="menu-item" to="/about">About</router-link>
              </nav>
          </header>
`,
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
