import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { Sample } from '../../../typings/vue'

const state = {
  sampleStore: <Sample[]> []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
