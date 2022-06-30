import { eventBus } from '../../../services/eventBus-service.js'

export default {
	template: `
        <div class="color-choose-modal flex">
            <div class="pink" @click="onColorNote('rgb(242, 139, 130)')"></div>
            <div class="orange" @click="onColorNote('rgb(250, 189, 3)')"></div>
            <div class="yellow" @click="onColorNote('rgb(255, 244, 118)')"></div>
            <div class="green" @click="onColorNote('rgb(205, 255, 145)')"></div>
        </div>
          `,
	props: ['noteId'],
	data() {
		return {}
	},
	methods: {
		onColorNote(color) {
			eventBus.emit('color', { id: this.noteId, color })
		},
	},
	computed: {},
}
