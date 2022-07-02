export default {
	template: `
        <div class="filter-container">
            <input type="search" name="name-search" 
                placeholder="Search by name" v-model="byName"
                @input="onFilterChange">
            <span>
                Filter by price:
                <input type="number" name="from-price" v-model="fromPrice" @input="onFilterChange">
                 - 
                <input type="number" name="to-price" v-model="toPrice" @input="onFilterChange">
            </span>

            <button @click="onReset">Reset</button>
        </div>`,

	props: ['maxPrice'],

	data() {
		return {
			fromPrice: 0,
			toPrice: Infinity,
			byName: '',
		}
	},

	methods: {
		onFilterChange() {
			const filter = {
				fromPrice: this.fromPrice,
				toPrice: this.toPrice,
				byName: this.byName,
			}
			this.$emit('filtered', filter)
		},
		onReset() {
			this.fromPrice = 0
			this.toPrice = this.maxPrice
			this.byName = ''
			this.onFilterChange()
		},
	},

	created() {
		this.toPrice = this.maxPrice
	},
}
