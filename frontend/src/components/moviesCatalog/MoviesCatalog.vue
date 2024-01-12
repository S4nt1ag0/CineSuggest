<script>
import MoviePoster from './MoviePoster.vue'
import api from '../../api'
import loadingIcon from '../icons/loadingIcon.vue'
import MovieHighlighted from './MovieHighlighted.vue'
import NavCustom from '../NavCustom.vue'

export default {
  components: {
    MoviePoster,
    MovieHighlighted,
    loadingIcon,
    NavCustom
  },
  data() {
    return {
      movieCatalogData: [],
      pageCount: 1,
      filters: {
        gender: '',
        text: '',
        page: 1
      }
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
    <MovieHighlighted v-if="movieCatalogData.length" :movieData="movieCatalogData[0]" />
    <loadingIcon v-else />
    <navCustom />
    <p class="tmdb-warning">
      Este produto utiliza o TMDB e as APIs do TMDB, mas não é endossado, certificado ou de outra
      forma aprovado pelo TMDB.
    </p>
    <div v-if="movieCatalogData.length" class="catalog-content">
      <MoviePoster v-for="movie in movieCatalogData" :key="movie.id" :movieData="movie" />
    </div>
    <loadingIcon v-else />
  </div>
</template>

<style scoped lang="scss">
.catalog-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .catalog-content {
    width: 100%;
    max-width: 1280px;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    grid-auto-flow: row;
    gap: 20px;
  }
}

.tmdb-warning {
  text-align: center;
  font-size: 0.75rem;
  padding: 1rem 0.5rem;
  font-style: italic;
}
@media (min-width: 768px) {
  .tmdb-warning {
    display: none;
  }
}
</style>
