export default {
	template: `
        <section class="mail-filter flex align-center">
			<div class="input-container">
				<input type="text" 
						placeholder="Search mail"
						class="search-input"
						v-model="searchTxt"
						@input="onInput"
					/>
			</div>
			
				<div class="sort-dropdown">
					 <span class="drop-header"> {{ dropHeader }} </span>

					 <div class="dropdown-content">
						<div @click="onSortChange('date-new')">Date - New first</div>
						<div @click="onSortChange('date-old')">Date - Old first</div>
						<div @click="onSortChange('subject-normal')">Subject - A to Z</div>
						<div @click="onSortChange('subject-reverse')">Subject - Z to A</div>
					 </div>
				</div>
        </section>
    `,

	props: ['status'],

	data() {
		return {
			searchTxt: '',
			sortBy: 'date-new',
		}
	},

	methods: {
		onInput() {
			this.$emit('searched', this.searchTxt)
		},
		onSortChange(sortBy) {
			this.sortBy = sortBy
			this.$emit('sorted', sortBy)
		},
	},

	computed: {
		dropHeader() {
			let header = 'Sort by: '
			if (this.sortBy === 'date-new') header += 'Date - New first'
			else if (this.sortBy === 'date-old') header += 'Date - Old first'
			else if (this.sortBy === 'subject-normal') header += 'Subject - A to Z'
			else if (this.sortBy === 'subject-reverse') header += 'Subject - Z to A'
			return header
		},
	},

	watch: {
		status: {
			// reset the search bar if the user changes folders
			handler(status) {
				this.searchTxt = ''
				this.sortBy = 'date-new'
			},
			immediate: true,
		},
	},
}
