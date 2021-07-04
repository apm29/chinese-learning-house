export const state = () => ({
  list: [],
  postAsyncCount: 0,
})

export const mutations = {
  updateList(state, payload) {
    state.list = payload
  },

  addPostCount(state, payload) {
    state.postAsyncCount += 1
  },
}
