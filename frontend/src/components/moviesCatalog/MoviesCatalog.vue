<script>
import MoviePoster from './MoviePoster.vue'
import api from '../../api'
import ButtonComponent from '../utils/ButtonComponent.vue'
import loadingIcon from '../icons/loadingIcon.vue'
import MovieHighlighted from './MovieHighlighted.vue'

export default {
  components: {
    MoviePoster,
    ButtonComponent,
    MovieHighlighted,
    loadingIcon
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
    <div class="catalog-filters">
      <ButtonComponent :active="filters.gender == ''" title="Lançamentos" />
      <ButtonComponent :active="filters.gender == 'actiob'" title="Ação" />
      <ButtonComponent :active="filters.gender == 'romance'" title="Romance" />
      <ButtonComponent :active="filters.gender == 'adventure'" title="Aventura" />
      <ButtonComponent :active="filters.gender == 'terror'" title="Terror" />
      <ButtonComponent :active="filters.gender == 'comedy'" title="Comédia" />
    </div>
    <div v-if="movieCatalogData.length" class="catalog-content">
      <MoviePoster
        v-for="movie in movieCatalogData"
        :key="movie.id"
        :posterURL="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
      />
    </div>
    <loadingIcon v-else />
  </div>
</template>

<style scoped lang="scss">
.catalog-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .catalog-filters {
    background-color: #343a3f;
    width: 100%;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .catalog-content {
    max-width: 1280px;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    grid-auto-flow: row;
    gap: 20px;
  }
}
</style>
