export default {
	template: `
        <section class="mail-filter">
            <input type="text" 
                    placeholder="Search mail"
                    class="search-input"
                    v-model="searchTxt"
                    @input="onInput"
                />
        </section>
    `,

	props: ['status'],

	data() {
		return {
			searchTxt: '',
		}
	},

	methods: {
		onInput() {
			this.$emit('searched', this.searchTxt)
		},
	},

	watch: {
		status: {
			// reset the search bar if the user changes folders
			handler(status) {
				this.searchTxt = ''
			},
			immediate: true,
		},
	},
}
