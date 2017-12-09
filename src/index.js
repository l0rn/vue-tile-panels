import TileFrame from './tile-frame'
import VerticalSplit from './vertical-split'
import HorizontalSplit from './horizontal-split'

export const COMPONENTS = [
  TileFrame,
  VerticalSplit,
  HorizontalSplit
]

// vue plugin
const TilePanels = {
  install(Vue) {
    for (let component of COMPONENTS) {
      Vue.component(component.name, component)
    }
  }
}

window.VueTilePanels = TilePanels

export default TilePanels