<template>
  <div class="Movie-Poster-Container">
    <img :src="posterURL" alt="poster" />
  </div>
</template>

<script>
export default {
  props: {
    posterURL: {
      type: String,
      default: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg'
    }
  }
}
</script>
<style scoped lang="scss">
.Movie-Poster-Container {
  display: block;
  img {
    width: 100%;
    height: 100%;
    //display: block;
  }
}
</style>
