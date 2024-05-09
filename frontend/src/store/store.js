import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      filters: {
        genre: '',
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
    changeGenreFilter(state, genre) {
      state.filters.genre = genre
    },
    changePageFilter(state, page) {
      state.filters.page = page
    },
    changeTextFilter(state, text) {
      state.filters.text = text
    }
  },
  actions: {
    changeGenreFilter(context, genre) {
      context.commit('changeGenreFilter', genre)
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
