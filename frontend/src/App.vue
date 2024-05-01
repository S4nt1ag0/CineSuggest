<script>
import HeaderCustom from './components/HeaderCustom.vue'
import FooterCustom from './components/FooterCustom.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    HeaderCustom,
    FooterCustom
  }
}
</script>

<template>
  <div class="max_container">
    <HeaderCustom />
    <RouterView />
    <footer>
      <FooterCustom />
    </footer>
  </div>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
  .wrapper {
    width: 100%;
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
