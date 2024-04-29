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
    <div v-if="movieCatalogData.length && !isLoading" class="load-more">
      <span @click="handleChangePage">Ver mais...</span>
    </div>
    <loadingIcon v-else />
    <NavCustom />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
      flagToConcat: false,
      isLoading: false
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
    ...mapActions(['changePageFilter']),
    loadMoviesCatalog() {
      this.isLoading = true
      const queryParams = this.objectToQueryParams(this.filters)
      api
        .get(`/movies?${queryParams}`)
        .then((response) => {
          const data = response.data
          this.movieCatalogData = this.flagToConcat
            ? [...this.movieCatalogData, ...data.results]
            : data.results
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.flagToConcat = false
          this.isLoading = false
        })
    },
    objectToQueryParams(obj) {
      return Object.keys(obj)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
        .join('&')
    },
    handleChangePage() {
      this.flagToConcat = true
      this.changePageFilter(this.filters.page + 1)
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
  .load-more {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3797b1;
    font-size: 1.2rem;
    font-weight: 500;
    span:hover {
      cursor: pointer;
      text-decoration: underline;
    }
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
