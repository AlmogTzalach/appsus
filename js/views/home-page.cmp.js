export default {
	template: `
        <section class="home-page app-main">
			<h2>All your favorite apps in one place.</h2>
			<div class="home-page-img-container flex column align-center">
				<div class="flex space-around">
					<div class="img-container" @click="onNotes">
						<img src="./assets/notes-homepage.svg">
						<h3>Notes</h3>
					</div>
					<div class="img-container" @click="onMail">
						<img src="./assets/mail-homepage.svg">
						<h3>Mail</h3>
					</div>
					<div class="img-container" @click="onBooks">
						<img src="./assets/book-homepage.svg">
						<h3>Books</h3>
					</div>
				</div>
			</div>
		</section>
	  `,

	methods: {
		onNotes() {
			this.$router.push('/keep')
		},
		onMail() {
			this.$router.push('/mail/inbox')
		},
		onBooks() {
			this.$router.push('/books')
		},
	},
}
