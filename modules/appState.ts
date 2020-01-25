import { getterTypes } from "../getter-types";
import { mutationTypes } from "../mutation-types";
import { Module, Mutation, VuexModule} from "vuex-module-decorators";
import { AppColors } from "~/src/typings/vue";

/**
 *  @name - AppState
 *
 *  @desc - App State Module. Handles global app state items.
 *
 *  @author - Chip Moeser @WKS
 *
 *  Mon May 13 12:13:01 EDT 2019
 */

@Module({
  stateFactory: true,
  namespaced: true,
  name: "appState"
})
export default class AppModule extends VuexModule {
  /**
   * @name - GET_MOBILE_MENU_OPEN
   *
   * @description - Gets the state of the mobile menu menuMobileIsOpened true/false
   *
   * @returns - this.menuMobileIsOpened: boolean
   */
  get [getterTypes.GET_MOBILE_MENU_OPEN](): boolean {
    return this.menuMobileIsOpened;
  }
  /**
   * AppColors
   *
   * @description - Colors for the app
   *
   * @type - AppColors - ~/src/typings/vue
   */
  appColors: AppColors = {
    lakeBlue: "#002b49",
    midnightBlue: "#002639",
    innovativeRed: "#ff4438",
    coolSlate: "#323e48",
    techSilver: "#cfd2d3",
    letsGoGreen: "#00bbb4",
    winterSkyBlue: "#63cfe3",
    adventurYellow: "#ffd600",
    white: "#ffffff",
    black: "#000000"
  };
  /**
   * menuMobileIsOpened
   *
   * @description - The state of the mobile menu true/false
   *
   * @type - boolean
   */
  protected menuMobileIsOpened: boolean = false;
  /**
   * baseURL
   *
   * @description - URL of the Backend API
   *
   * @type - string
   *
   */
  protected baseURL: string = "https://myapi.com";
  /**
   * animationShown
   *
   * @description - Has the intro animation been show?
   *
   * @type - boolean
   */
  protected animationShown: boolean = false;

  /**
   * SET_MENU_MOBILE_OPEN
   *
   * @description - Sets the state of the mobile menu menuMobileIsOpened true/false
   *
   * @param - value: boolean - true/false if mobile menu is open
   */
  @Mutation
  [mutationTypes.SET_MENU_MOBILE_OPEN](value: boolean): void {
    this.menuMobileIsOpened = value;
  }
  /**
   * SET_ANIMATION_SHOW
   *
   * @description - Sets whether the intro animation has been shown
   *
   * @param - value: boolean - true/false if animation has been shown
   */
  @Mutation
  [mutationTypes.SET_ANIMATION_SHOWN](value: boolean): void {
    this.animationShown = value;
  }
}
