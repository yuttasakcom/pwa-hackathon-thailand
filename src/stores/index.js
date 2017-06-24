import Vue from 'vue'
import Vuex from 'vuex'
import * as user from './modules/user'
import * as css from './modules/css'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    css
  }
})
export default store
