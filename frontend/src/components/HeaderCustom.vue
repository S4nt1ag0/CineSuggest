<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="left-content">
          <RouterLink to="/">
            <Logo width="25vw" />
          </RouterLink>
          <catalog-filter-button class="catalog-filters" />
        </div>
        <div class="center-content">
          <RouterLink v-show="showTbmd" to="/" class="tbmd-container">
            <TMDBSVG height="50px" width="30vw" id="NavbarTMDB" />
          </RouterLink>
        </div>
        <div class="right-content">
          <searchButton @handleFocused="showTbmdContent" placeholderText="digite o nome do filme" />
          <ButtonComponent class="yourlist-container">
            <YourListIcon width="32px" height="32px" />
          </ButtonComponent>
          <RouterLink to="/about">
            <div class="profile-container">
              <Profile width="32px" height="32px" />
            </div>
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Logo from './icons/logoSVG.vue'
import Profile from './icons/profileSVG.vue'
import TMDBSVG from './icons/TMDBSVG.vue'
import ButtonComponent from './utils/ButtonComponent.vue'
import SearchButton from './utils/SearchButton.vue'
import YourListIcon from './icons/yourListIcon.vue'
import CatalogFilterButton from './utils/CatalogFilterButton.vue'
export default {
  components: {
    Logo,
    Profile,
    TMDBSVG,
    ButtonComponent,
    SearchButton,
    YourListIcon,
    CatalogFilterButton
  },
  data() {
    return {
      showTbmd: true
    }
  },
  methods: {
    showTbmdContent(focused) {
      this.showTbmd = !focused
    }
  }
}
</script>

<style scoped lang="scss">
header {
  position: sticky;
  top: 0px;
  z-index: 1;
}
.wrapper {
  width: 100%;
  position: relative;
}
nav {
  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1rem;
  background-color: #343a3f;
  z-index: 1;
  div {
    display: flex;
    flex-direction: row;
  }
  .right-content {
    display: flex;
    justify-content: space-around;
    > * {
      margin-right: 5px;
    }
  }
}
.profile-container {
  border-radius: 50%;
  background-color: #d9d9d9;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tbmd-container {
  display: none;
}
@media (max-width: 768px) {
  .profile-container {
    display: none;
  }
  .catalog-filters {
    display: none;
  }
  .yourlist-container {
    display: none;
  }
  nav {
    background-color: #343a3f;
    a {
      padding: 0;
    }
  }
  nav:hover {
    background-color: #343a3f;
  }

  .tbmd-container {
    display: block;
  }
}
</style>
