import { mutationTypes } from '../mutation-types'
import { getterTypes } from '../getter-types'
import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { FPOptions } from '~/src/typings/vue'

/**
 *  @name - SlidesState
 *
 *  @desc - State for FullPageJS slides.
 *
 *  @author - Chip Moeser @WKS
 *
 *  Mon May 13 12:29:13 EDT 2019
 */

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'slidesState'
})
export default class SlidesModule extends VuexModule {
  /**
   * slideTone
   *
   * @description - Light/Dark tone of a slide. Used for hamburger over color
   *
   * @type - string
   */
  protected slideTone: string = 'dark'

  /**
   * slideColor
   *
   * @description - Color of a slide
   *
   * @type - string
   */
  protected slideColor: string = ''

  /**
   * fpOptions
   *
   * @description - Default options for FullPageJS. Overriden locally.
   *
   * @type - string
   */
  protected fpOptions: FPOptions = {
    licenseKey: '4, 8, 15, 16, 23 42',

    // Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: false,

    // Design
    controlArrows: true,
    paddingTop: '0px',
    paddingBottom: '0px',
    fixedElements: '',

    // Scrolling
    scrollBar: true,

    menu: '#menu',
    navigation: false,
    responsiveWidth: 960,
    anchors: []
  }

  /**
   * @name - GET_SLIDE_COLOR
   *
   * @description - Gets the slide tone light/dark
   *
   * @param slideTone
   *
   * @returns - this.slideColor: string
   */
  get [getterTypes.GET_SLIDE_COLOR](): string {
    return this.slideColor
  }

  /**
   * @name - SET_SLIDE_TONE
   *
   * @description - Sets the slide tone light/dark
   *
   * @param slideTone: string
   */
  @Mutation
  [mutationTypes.SET_SLIDE_TONE](slideTone: string): void {
    // console.log('ST: ', slideTone)
    this.slideTone = slideTone
  }
  /**
   * @name - SET_SLIDE_COLOR
   *
   * @description - Sets the slide color
   *
   * @param - slideColor: string
   */
  @Mutation
  [mutationTypes.SET_SLIDE_COLOR](slideColor: string): void {
    this.slideColor = slideColor
  }

  /**
   * SET_SLIDE_CONFIG
   *
   * @description - Sets the slide config object for local overrrides
   *
   * @param slideOptions:FPOptions
   */
  @Mutation
  [mutationTypes.SET_SLIDE_CONFIG](slideOptions: FPOptions): void {
    Object.assign(this.fpOptions, slideOptions)
  }
}

// export default getModule(SlidesModule)
