<template>
  <div class="footer-container">
    <IconTMDB height="50px" width="150px" />
    <p>
      Este produto utiliza o TMDB e as APIs do TMDB, mas não é endossado, certificado ou de outra
      forma aprovado pelo TMDB.
    </p>
  </div>
</template>
<script>
import IconTMDB from './icons/TMDBSVG.vue'
export default {
  components: {
    IconTMDB
  }
}
</script>
<style scoped lang="scss">
.footer-container {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;

  p {
    text-align: center;
  }
}
@media (max-width: 768px) {
  .footer-container {
    display: none;
  }
}
</style>
