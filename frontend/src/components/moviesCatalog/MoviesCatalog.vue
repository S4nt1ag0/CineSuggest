<script>
import MoviePoster from './MoviePoster.vue'
import api from '../../api'

export default {
  components: {
    MoviePoster
  },
  data() {
    return {
      movieCatalogData: [],
      pageCount: 1
    }
  },
  created() {
    this.loadMoviesCatalog()
  },
  methods: {
    loadMoviesCatalog() {
      api
        .get('/movies')
        .then((response) => {
          const data = response.data
          this.movieCatalogData = data.results
          this.pageCount = data.page
          console.log(this.movieCatalogData)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<template>
  <div class="catalog-container">
    <MoviePoster
      v-for="movie in movieCatalogData"
      :key="movie.id"
      :posterURL="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
    />
  </div>
</template>

<style scoped lang="scss">
.catalog-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  grid-auto-flow: row;
  gap: 20px;
}
</style>
