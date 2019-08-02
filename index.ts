import AppState from './modules/appState'
import SlidesState from './modules/slidesState'

export const state = () => ({
  counter: 0
})

export const modules = {
  appState: AppState,
  slidesState: SlidesState
}
