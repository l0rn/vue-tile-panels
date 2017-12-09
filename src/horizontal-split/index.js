import template from './template.pug'
import './style.styl'

const HorizontalSplit = {
  template,
  name: 'horizontal-split',
  data() {
    return {
      startClientY: null,
      splitHeight: 50,
      splitUnit: '%'
    }
  },
  computed: {
    styleHeight() {
      return `${this.splitHeight}${this.splitUnit}`
    }
  },
  methods: {
    startResize(event) {
      this.startClientY = event.clientY
      document.documentElement.addEventListener('mouseup', this.stopResize)
      document.documentElement.addEventListener('mousemove', this.resize)
    },
    resize(event) {
      if (event.clientY <= this.$refs.topPanel.parentElement.getBoundingClientRect().top ||
          event.clientY >= this.$refs.topPanel.parentElement.getBoundingClientRect().bottom) {
        return
      }
      const diff = event.clientY - this.startClientY
      this.startClientY = event.clientY
      this.splitHeight = this.$refs.topPanel.offsetHeight + diff
      this.splitUnit = 'px'
    },
    stopResize() {
      document.documentElement.removeEventListener('mouseup', this.stopResize)
      document.documentElement.removeEventListener('mousemove', this.resize)
    }
  }
}

export default HorizontalSplit
