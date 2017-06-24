export const state = {
  app: {
    bg: "background: url('/static/img/background/bg.jpg') center center / cover no-repeat fixed;"
  }
}
export const mutations = {
  'SET_CSS' (state, payload) {
    state.app = payload
  }
}
export const actions = {
  setCss: ({commit}, payload) => {
    commit('SET_CSS', payload)
  }
}
export const getters = {
  getCss: state => {
    return state.app
  }
}
