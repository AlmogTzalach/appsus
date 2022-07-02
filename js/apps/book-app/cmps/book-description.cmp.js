export default {
	template: `
        <span>Description: </span>
        <span> {{ computedText }} </span>
        <span v-if="isMoreShown" class="text-link" @click="toggleExpand">...more</span>
        <span v-if="isLessShown" class="text-link" @click="toggleExpand"> Show less</span>`,

	props: ['txt'],

	data() {
		return {
			isLongText: false,
			isExpanded: false,
		}
	},

	computed: {
		computedText() {
			let computedText = this.txt
			if (!this.isExpanded) computedText = computedText.substring(0, 100)

			return computedText
		},
		isMoreShown() {
			if (!this.isLongText || this.isExpanded) return false
			return true
		},
		isLessShown() {
			if (!this.isLongText || !this.isExpanded) return false
			return true
		},
	},

	methods: {
		toggleExpand() {
			this.isExpanded = !this.isExpanded
		},
	},

	mounted() {
		if (this.txt.length > 100) this.isLongText = true
	},
}
