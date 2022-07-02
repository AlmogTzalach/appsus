import { bookService } from './services/book-service.js'
import bookList from './cmps/book-list.cmp.js'
import bookFilter from './cmps/book-filter.cmp.js'

export default {
	template: `
        <main v-if="books">
            <book-filter @filtered="setFilter" :maxPrice="186"/>
            <book-list :books="booksToShow"/>
        </main>`,

	data() {
		return {
			books: null,
			filterBy: null,
		}
	},

	computed: {
		booksToShow() {
			if (!this.filterBy) return this.books

			let filteredBooks = null
			const regex = new RegExp(this.filterBy.byName, 'i')
			filteredBooks = this.books.filter((book) => regex.test(book.title))
			filteredBooks = filteredBooks.filter((book) => {
				const price = book.listPrice.amount
				return price >= this.filterBy.fromPrice && price <= this.filterBy.toPrice
			})

			return filteredBooks
		},
		maxPrice() {
			if (!this.books) return 0

			let maxPrice = 0
			this.books.forEach((book) => {
				if (book.listPrice.amount > maxPrice) maxPrice = book.listPrice.amount
			})
			return maxPrice
		},
	},

	methods: {
		setFilter(filter) {
			this.filterBy = filter
		},
	},

	created() {
		bookService.query().then((books) => (this.books = books))
	},

	components: {
		bookFilter,
		bookList,
	},
}
