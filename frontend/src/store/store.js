import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
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
    changeGenderFilter(state, gender) {
      state.filters.gender = gender
    },
    changePageFilter(state, page) {
      state.filters.page = page
    },
    changeTextFilter(state, text) {
      state.filters.text = text
    }
  },
  actions: {
    changeGenderFilter(context, gender) {
      context.commit('changeGenderFilter', gender)
    },
    changePageFilter(context, page) {
      context.commit('changePageFilter', page)
    },
    changeTextFilter(context, text) {
      context.commit('changeTextFilter', text)
    }
  }
})

export default store
