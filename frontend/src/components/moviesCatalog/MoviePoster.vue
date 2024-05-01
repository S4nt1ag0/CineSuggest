<template>
  <div class="Movie-Poster-Container" @click="handleDetailsMovie">
    <img :src="backgroundUrl" alt="poster" />
    <div class="Movie-Poster-Content">
      <div class="Movie-Poster-Info">
        <h5>{{ movieData.title }}</h5>
        <p>{{ movieData.overview }}</p>
      </div>
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
  computed: {
    backgroundUrl() {
      return (
        'https://image.tmdb.org/t/p/w300' + this.movieData.poster_path ||
        'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg'
      )
    }
  },
  methods: {
    handleDetailsMovie() {
      this.$router.push({ name: 'movieview', params: { id: this.movieData.id } })
    }
  }
}
</script>
<style scoped lang="scss">
.Movie-Poster-Container {
  position: relative;
  display: block;
  img {
    width: 100%;
    height: 100%;
  }

  .Movie-Poster-Content {
    display: none;
  }
}
.Movie-Poster-Container:hover {
  -webkit-box-shadow: -3px 4px 10px 7px rgba(220, 220, 220, 0.14);
  -moz-box-shadow: -3px 4px 10px 7px rgba(220, 220, 220, 0.14);
  box-shadow: -3px 4px 10px 7px rgba(220, 220, 220, 0.14);
  cursor: pointer;
  .Movie-Poster-Content {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(28, 28, 28, 0.4);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 0.4rem;

    .Movie-Poster-Info {
      h5 {
        font-size: 1rem;
        font-weight: bold;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }
      p {
        font-size: 0.8rem;
        color: #fff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        max-height: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
