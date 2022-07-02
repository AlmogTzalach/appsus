import bookPreview from './book-preview.cmp.js'

export default {
	template: `
        <section v-if="books">
            <ul class="book-grid">
                <li v-for="book in books">
                    <book-preview :book="book" @click="selectBook(book.id)"/>
                </li>
            </ul>
        </section>`,

	props: ['books'],

	methods: {
		selectBook(bookId) {
			this.$router.push('/books/' + bookId)
		},
	},

	components: {
		bookPreview,
	},
}
