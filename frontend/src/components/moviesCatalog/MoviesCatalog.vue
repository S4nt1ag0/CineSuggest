<template>
  <div class="catalog-container">
    <MovieHighlighted v-if="movieCatalogData.length" :movieData="movieCatalogData[0]" />
    <loadingIcon v-else />
    <p class="tmdb-warning">
      Este produto utiliza o TMDB e as APIs do TMDB, mas não é endossado, certificado ou de outra
      forma aprovado pelo TMDB.
    </p>
    <div v-if="movieCatalogData.length" class="catalog-content">
      <MoviePoster v-for="movie in movieCatalogData" :key="movie.id" :movieData="movie" />
    </div>
    <loadingIcon v-else />
    <NavCustom />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
      pageCount: 1
    }
  },
  computed: {
    ...mapGetters({
      filters: 'getFilters'
    })
  },
  watch: {
    filters: {
      handler: function (novoValor) {
        this.loadMoviesCatalog()
        console.log(novoValor)
      },
      deep: true
    }
  },

  created() {
    this.loadMoviesCatalog()
  },
  methods: {
    loadMoviesCatalog() {
      const queryParams = this.objectToQueryParams(this.filters)
      api
        .get(`/movies?${queryParams}`)
        .then((response) => {
          const data = response.data
          this.movieCatalogData = data.results
          this.pageCount = data.page
        })
        .catch((e) => {
          console.log(e)
        })
    },
    objectToQueryParams(obj) {
      return Object.keys(obj)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&')
    }
  }
}
</script>

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
