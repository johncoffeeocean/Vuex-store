import { ActionTree } from 'vuex'
import gql from 'graphql-tag'
import graphqlClient from '../../../apollo/clients/default'
import { actionTypes } from '../../action-types'
import { mutationTypes } from '../../mutation-types'
import { RootState, SampleStoreState } from '../../../typings/vue'

/**
 *  @desc 
 * 
 *  @author Chip Moeser
 *
 *  Sun Jan 27 14:53:23 EST 2019
 */
export const actions: ActionTree<SampleStoreState, RootState> = {
    /**
   * beforeRouteLeave
   * @description - 
   * @param to - The next rout
   * @param from - This route
   * @param next: function - next tick
   */
  async [actionTypes.GET_SAMPLES]({ commit }, termID: string) {
    const response = await graphqlClient.query({
      query: gql`
        query taxonomyTermGraphql1View($tid: String!) {
            taxonomyViewGraphql1View(
              contextualFilter: { parent_target_id: $tid }
            ) {
              id: entityId
              entityLabel
            }
        }
      `,
      variables: { tid: termID }
    })
    commit(mutationTypes.SET_SAMPLE, response.data['taxonomyViewGraphql1View'])
    console.log('Samples: for ID: termID', termID, ' RESP ',  response.data['taxonomyViewGraphql1View'])
  },
}




