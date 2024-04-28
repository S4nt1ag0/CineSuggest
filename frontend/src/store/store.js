import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0,
      filters: {
        gender: '',
        text: '',
        page: 1
      }
    }
  },
  getters: {
    getFilters(state) {
      return state.filters
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    changeGenderFilter(state, gender) {
      state.filters.gender = gender
    }
  },
  actions: {
    changeGenderFilter(context, gender) {
      context.commit('changeGenderFilter', gender)
    }
  }
})

export default store
