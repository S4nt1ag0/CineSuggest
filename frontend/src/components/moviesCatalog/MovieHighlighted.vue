<template>
  <div
    class="Movie-Highlighted-Container"
    :style="{
      background:
        'linear-gradient(rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url(' +
        backgroundUrl +
        '), rgb(28, 28, 28)'
    }"
  >
    <div class="Movie-Highlighted-Info">
      <h5>{{ movieData.title }}</h5>
      <p>{{ movieData.overview }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      backgroundUrl: 'https://image.tmdb.org/t/p/w1280' + this.movieData.poster_path
    }
  },
  mounted() {
    console.log(this.movieData)
  }
}
</script>
<style scoped lang="scss">
.Movie-Highlighted-Container {
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position-x: center !important;
  background-position-y: 30% !important;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;

  .Movie-Highlighted-Info {
    max-width: 1280px;
    h5 {
      font-size: 2em;
      font-weight: bold;
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    p {
      font-size: 1.2em;
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
