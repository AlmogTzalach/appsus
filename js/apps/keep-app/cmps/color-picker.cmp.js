import { eventBus } from '../../../services/eventBus-service.js'

export default {
	template: `
        <div class="color-choose-modal flex">
            <div class="white" @click.stop="onColorNote('white')"></div>
            <div class="red" @click.stop="onColorNote('rgb(242, 139, 130)')"></div>
            <div class="orange" @click.stop="onColorNote('rgb(250, 189, 3)')"></div>
            <div class="yellow" @click.stop="onColorNote('rgb(255, 244, 118)')"></div>
            <div class="green" @click.stop="onColorNote('rgb(205, 255, 145)')"></div>
            <div class="teal" @click.stop="onColorNote('rgb(167, 254, 235)')"></div>
            <div class="blue" @click.stop="onColorNote('rgb(203, 240, 248)')"></div>
            <div class="dark-blue" @click.stop="onColorNote('rgb(175, 203, 250)')"></div>
            <div class="purple" @click.stop="onColorNote('rgb(215, 174, 252)')"></div>
            <div class="pink" @click.stop="onColorNote('rgb(253, 207, 233)')"></div>
        </div>
          `,
	data() {
		return {}
	},
	methods: {
		onColorNote(color) {
			this.$emit('colorNote', color)
			this.$emit('closeModal')
		},
	},
	computed: {},
}
