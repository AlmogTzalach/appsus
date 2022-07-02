export default {
	template: `
        <div>
            <img :src="book.thumbnail" alt="Book cover">
            <h2>Title: {{ book.title }} </h2>
            <h3>Price: {{ bookPrice }} </h3>
        </div>`,

	props: ['book'],

	computed: {
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
	},
}
