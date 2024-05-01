<template>
  <div class="MovieDetails-container">
    <div>
      <span>Movie details of movie of id: {{ movieId }}</span>
    </div>

    <div v-if="movieCatalogData.length && !isLoading" class="load-more">
      <span @click="handleChangePage">Ver mais...</span>
    </div>
    <loadingIcon v-else />
    <NavCustom />
  </div>
</template>

<script>
import loadingIcon from '../icons/loadingIcon.vue'
import NavCustom from '../NavCustom.vue'

export default {
  components: {
    loadingIcon,
    NavCustom
  },
  props: {
    movieId: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      movieCatalogData: [],
      flagToConcat: false,
      isLoading: false
    }
  },
  created() {
    this.loadMovieDetails()
  },
  methods: {
    loadMovieDetails() {
      this.isLoading = true

      this.isLoading = false
    }
  }
}
</script>

<style scoped lang="scss">
.MovieDetails-container {
  display: flex;
  flex-direction: column;
  align-items: center;

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
