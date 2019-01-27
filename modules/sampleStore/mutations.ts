import { MutationTree } from 'vuex'
import { SampleStoreState } from '../../../typings/vue'
import { mutationTypes } from '../../mutation-types'

export const mutations: MutationTree<SampleStoreState> = {
  [mutationTypes.SET_SAMPLE](state, sample): void {
    state.sampleStore = sample;
  },
}
