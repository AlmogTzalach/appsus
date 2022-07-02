export default {
	template: `
        <section class="mail-filter">
            <input type="text" 
                    placeholder="Search mail"
                    class="search-input"
                    v-model="searchTxt"
                    @input="onInput"
                />
			
				<div class="filter-dropdown">
					 <span> {{ dropHeader }} </span>
				</div>
        </section>
    `,

	props: ['status'],

	data() {
		return {
			searchTxt: '',
			filterBy: 'date-new',
		}
	},

	methods: {
		onInput() {
			this.$emit('searched', this.searchTxt)
		},
	},

	computed: {
		dropHeader() {
			let header = 'Sort by: '
			if (this.filterBy === 'date-new') header += 'Date-new first'
			else if (this.filterBy === 'date-new') header += 'Date-new first'
			else if (this.filterBy === 'date-new') header += 'Date-new first'
			else if (this.filterBy === 'date-new') header += 'Date-new first'
			// return header
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
