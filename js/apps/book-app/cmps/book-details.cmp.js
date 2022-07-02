import bookDescription from './book-description.cmp.js'
import { bookService } from '../services/book-service.js'

export default {
	template: `
        <section v-if="book" class="book-details-container">
            <div class="img-container">
                <img :src="book.thumbnail" alt="Book cover">
            </div>

            <div class="book-details">
                <h2>Title: {{book.title}} </h2>
                <p>Subtitle: {{book.subtitle}} </p>
                <p>Authors: {{ authors }} </p>
                <p>Publish date: {{ publishDate }} </p>
                <span><book-description :txt="book.description" /></span>
                <p>Pages: {{ pages }} </p>
                <p>Categories: {{ categories }} </p>
                <p>Language: {{ book.language.toUpperCase() }} </p>
                <p>
                    Price: <span class="price" :class="priceClass"> {{ bookPrice }} </span> 
                    <span v-if="isOnSale"><img src="./assets/book-sale.png" alt="Sale icon" class="sale-icon"></span>
                </p>
    
                <button @click="onBack">Go back</button>
            </div>
        </section>`,

	data() {
		return {
			book: null,
		}
	},

	computed: {
		authors() {
			return this.book.authors.join(', ')
		},
		categories() {
			return this.book.categories.join(', ')
		},
		bookPrice() {
			let price = this.book.listPrice.amount
			const currency = this.book.listPrice.currencyCode
			switch (currency) {
				case 'USD':
					price = '$' + price
					break
				case 'EUR':
					price += '€'
					break
				case 'ILS':
					price += '₪'
					break
			}
			return price
		},
		isOnSale() {
			return this.book.listPrice.isOnSale
		},
		priceClass() {
			const price = this.book.listPrice.amount
			return {
				'low-price': price < 20,
				'high-price': price > 150,
			}
		},
		pages() {
			let pages = this.book.pageCount

			if (pages < 100) pages += ' - Light reading'
			else if (pages > 500) pages += ' - Long reading'
			else if (pages > 200) pages += ' - Decent reading'

			return pages
		},
		publishDate() {
			let publishYear = this.book.publishedDate
			const currYear = new Date().getFullYear()
			const diff = currYear - publishYear

			if (diff <= 1) publishYear += ' - New!'
			else if (diff > 10) publishYear += ' - Veteran book'

			return publishYear
		},
	},

	methods: {
		onBack() {
			this.$router.push('/books')
		},
	},

	created() {
		const bookId = this.$route.params.bookId
		bookService.get(bookId).then((book) => (this.book = book))
	},

	components: {
		bookDescription,
	},
}
