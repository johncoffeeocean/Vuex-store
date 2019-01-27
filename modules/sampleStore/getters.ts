import { GetterTree } from 'vuex'
import { RootState, SampleStoreState, Sample } from '../../../typings/vue'
import { getterTypes } from '../../getter-types'

export const getters: GetterTree<SampleStoreState, RootState> = {
  [getterTypes.GET_SAMPLE_BY_ID](state: SampleStoreState) {
    return (id: string) => {
      return state.sampleStore.find((sample: Sample) => sample.id === id, id);
    }
  }
}

