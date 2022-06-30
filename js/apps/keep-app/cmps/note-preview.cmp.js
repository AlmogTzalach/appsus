import noteTxt from './note-txt.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
import noteVideo from './note-video.cmp.js'
import colorPicker from './color-picker.cmp.js'

export default {
	template: `
        <section class="note-container flex column space-between" :style="noteBgClr">
                <component :is="note.type" :info="note.info"></component>
                    <ul class="action-btns clean-list flex space-around">
                        <li class="fa-solid fa-thumbtack"></li>
                        <li class="fa-solid fa-palette" @click="openColorModal">
							<color-picker v-if="isChooseClr" :noteId="this.note.id" @colorNote="onColorNote" @closeModal="closeColorModal"></color-picker>
						</li>
                        <li class="fa-solid fa-envelope"></li>
                        <li class="fa-solid fa-pen-to-square"></li>
                        <li class="fa-solid fa-trash-can" @click="onRemoveNote"></li>
                    </ul>
        </section>
    `,
	props: ['note'],
	data() {
		return {
			isChooseClr: false,
		}
	},
	components: { noteTxt, noteTodos, noteImg, noteVideo, colorPicker },
	methods: {
		openColorModal() {
			this.isChooseClr = true
		},
		closeColorModal() {
			this.isChooseClr = false
		},
		onRemoveNote() {
			this.$emit('remove', this.note.id)
		},
		onColorNote(color) {
			this.$emit('colorNote', this.note.id, color)
		},
	},
	computed: {
		noteBgClr() {
			return { backgroundColor: this.note.bgClr ? this.note.bgClr : 'white' }
		},
	},
	created() {},
}
