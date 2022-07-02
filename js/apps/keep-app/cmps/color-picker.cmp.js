import { eventBus } from '../../../services/eventBus-service.js'

export default {
	template: `
        <div class="color-choose-modal flex">
            <div class="white" title="White" @click.stop="onColorNote('white')"></div>
            <div class="red" title="Red" @click.stop="onColorNote('rgb(242, 139, 130)')"></div>
            <div class="orange" title="Orange" @click.stop="onColorNote('rgb(250, 189, 3)')"></div>
            <div class="yellow" title="Yellow" @click.stop="onColorNote('rgb(255, 244, 118)')"></div>
            <div class="green" title="Green" @click.stop="onColorNote('rgb(205, 255, 145)')"></div>
            <div class="teal" title="Teal" @click.stop="onColorNote('rgb(167, 254, 235)')"></div>
            <div class="blue" title="Blue" @click.stop="onColorNote('rgb(203, 240, 248)')"></div>
            <div class="dark-blue" title="Dark Blue" @click.stop="onColorNote('rgb(175, 203, 250)')"></div>
            <div class="purple" title="Purple" @click.stop="onColorNote('rgb(215, 174, 252)')"></div>
            <div class="pink" title="Pink" @click.stop="onColorNote('rgb(253, 207, 233)')"></div>
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
