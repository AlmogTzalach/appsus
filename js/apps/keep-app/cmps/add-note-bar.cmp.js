export default {
	template: `
        <section class="add-note-container flex column align-center">
            <div class="add-note-bar flex space-between">
                <span>Take a note...</span>
                <div class="note-type-select">
                        <ul class="note-types clean-list flex space-around">
                            <li class="fa-solid fa-comment" @click="changeNoteType('noteTxt')"></li>
                            <li class="fa-solid fa-list"></li>
                            <li class="fa-solid fa-image"></li>
                            <li class="fa-brands fa-youtube"></li>
                        </ul>
                </div>
            </div>
            <!-- Put a component here-->
            
            
        </section>
    `,
	data() {
		return {
			noteType: null,
		}
	},
	methods: {
		changeNoteType(type) {
			this.note = type
		},
	},
	computed: {},
	created() {},
}
