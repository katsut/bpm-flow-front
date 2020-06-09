export const state = () => ({
  user: null
})

export const getters = {
  isAuthenticated(state) {
    console.log('st:gt:isauth')
    return state.user !== null
  }
}
export const mutations = {
  setUser(state, payload) {
    state.user = payload
    console.log(`st:mt:setuser ${payload}`)
  },
  logOut(state) {
    state.user = null
    console.log('st:mt:logout')
  }
}
export const actions = {
  logOut({ commit }) {
    commit('logOut')
  },
  setUser({ commit }, payload) {
    commit('setUser', payload)
  }
}
