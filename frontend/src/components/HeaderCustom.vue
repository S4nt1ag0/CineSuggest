<script>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './icons/logoSVG.vue'
export default {
  components: {
    Logo
  }
}
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <RouterLink to="/about">GitHub</RouterLink>
      <RouterLink to="/about">Sign in</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
}
</style>
