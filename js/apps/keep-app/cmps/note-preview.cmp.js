import noteTxt from './note-txt.cmp.js'
import noteTodos from './note-todos.cmp.js'
import noteImg from './note-img.cmp.js'
import noteVideo from './note-video.cmp.js'
import colorPicker from './color-picker.cmp.js'

export default {
	template: `
        <section class="note-container flex column space-between" :style="noteBgClr" >
                <component :is="note.type" :info="note.info" @updateInfo="onUpdateInfo" class="note-content"></component>
                    <ul class="action-btns clean-list flex space-around">
                        <li :title="pinnedTitle" class="fa-solid fa-thumbtack" :style="isPinned" @click="onPinNote"></li>
                        <li title="Change Note's Color"  class="fa-solid fa-palette" @click="openColorModal">
							<color-picker v-if="isChooseClr" :noteId="this.note.id" @colorNote="onColorNote" @closeModal="closeColorModal"></color-picker>
						</li>
                        <li title="Send As Mail" class="fa-solid fa-envelope" @click="onSendToMail"></li>
						<li title="Copy Note" class="fa-solid fa-copy" @click="onCopyNote"></li>
                        <li title="Edit Note" class="fa-solid fa-pen-to-square" @click="onEditNote"></li>
                        <li title="Delete Note" class="fa-solid fa-trash-can" @click="onRemoveNote"></li>
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
		onSendToMail() {
			this.$emit('sendToMail', this.note.id)
		},
		openColorModal() {
			this.isChooseClr = true
		},
		closeColorModal() {
			this.isChooseClr = false
		},
		onCopyNote() {
			this.$emit('copyNote', this.note.id)
		},
		onPinNote() {
			this.$emit('pinNote', this.note.id)
		},
		onEditNote() {
			this.$emit('editNote', this.note)
		},
		onRemoveNote() {
			this.$emit('removeNote', this.note.id)
		},
		onColorNote(color) {
			this.$emit('colorNote', this.note.id, color)
		},
		onUpdateInfo(newInfo) {
			this.$emit('updateInfo', this.note.id, newInfo)
		},
	},
	computed: {
		noteBgClr() {
			return { backgroundColor: this.note.bgClr ? this.note.bgClr : 'white' }
		},
		isPinned() {
			return { color: this.note.isPinned ? '#fbbc04' : 'black' }
		},
		pinnedTitle() {
			return this.note.isPinned ? 'Unpin Note' : 'Pin Note'
		},
	},
	created() {},
}
