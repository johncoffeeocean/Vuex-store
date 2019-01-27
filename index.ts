import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '../typings/vue'
import sampleStore from './modules/person/person'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    sampleStore: sampleStore
  }
}

const createStore = () => new Vuex.Store(store)

export default createStore
