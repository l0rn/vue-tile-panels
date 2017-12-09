import template from './template.pug'
import './style.styl'

const VerticalSplit = {
  template,
  name: 'vertical-split',
  data() {
    return {
      startClientX: null,
      splitWidth: 50,
      splitUnit: '%'
    }
  },
  computed: {
    styleWidth() {
      return `${this.splitWidth}${this.splitUnit}`
    }
  },
  methods: {
    startResize(event) {
      this.startClientX = event.clientX
      document.documentElement.addEventListener('mouseup', this.stopResize)
      document.documentElement.addEventListener('mousemove', this.resize)
    },
    resize(event) {
      if (event.clientX <= this.$refs.leftPanel.parentElement.getBoundingClientRect().left ||
          event.clientX >= this.$refs.leftPanel.parentElement.getBoundingClientRect().right) {
        return
      }
      const diff = event.clientX - this.startClientX
      this.startClientX = event.clientX
      this.splitWidth = this.$refs.leftPanel.offsetWidth + diff
      this.splitUnit = 'px'
    },
    stopResize() {
      document.documentElement.removeEventListener('mouseup', this.stopResize)
      document.documentElement.removeEventListener('mousemove', this.resize)
    }
  }
}

export default VerticalSplit
