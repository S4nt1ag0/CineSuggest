<template>
  <div class="catalog-filters">
    <div class="desktop-navbar">
      <div class="buttons-nav-container">
        <ButtonComponent :active="filters.gender == ''" title="Lançamentos" />
        <ButtonComponent :active="filters.gender == 'actiob'" title="Ação" />
        <ButtonComponent :active="filters.gender == 'romance'" title="Romance" />
        <ButtonComponent :active="filters.gender == 'adventure'" title="Aventura" />
        <ButtonComponent :active="filters.gender == 'terror'" title="Terror" />
        <buttonComponent :active="filters.gender == 'comedy'" title="Comédia" />
      </div>
      <searchButton placeholderText="digite o nome do filme" />
    </div>
    <div class="mobile-navbar">
      <ButtonComponent :active="filters.gender == ''">
        <CatalogIcon width="32px" height="32px" />
        <p>Catálogo</p>
      </ButtonComponent>

      <ButtonComponent :active="filters.gender == ''">
        <HomeIcon width="32px" height="32px" />
        <p>Home</p>
      </ButtonComponent>

      <ButtonComponent :active="filters.gender == ''">
        <div class="profile-container">
          <ProfileSVG width="28px" height="28px" />
        </div>
        <p>Perfil</p>
      </ButtonComponent>
    </div>
  </div>
</template>
<script>
import CatalogIcon from './icons/catalogIcon.vue'
import HomeIcon from './icons/HomeIcon.vue'
import ProfileSVG from './icons/profileSVG.vue'
import ButtonComponent from './utils/ButtonComponent.vue'
import SearchButton from './utils/SearchButton.vue'
export default {
  components: {
    ButtonComponent,
    SearchButton,
    CatalogIcon,
    ProfileSVG,
    HomeIcon
  },
  data() {
    return {
      filters: {
        gender: '',
        text: '',
        page: 1
      }
    }
  }
}
</script>
<style scoped lang="scss">
.catalog-filters {
  background-color: #343a3f;
  width: 100%;

  .desktop-navbar {
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttons-nav-container {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-navbar {
    display: none;
  }
}

@media (max-width: 768px) {
  .catalog-filters {
    position: fixed;
    bottom: 0;
    .desktop-navbar {
      display: none;
    }
    .mobile-navbar {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .profile-container {
        border-radius: 50%;
        background-color: #d9d9d9;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      p {
        margin-top: 5px;
      }

      :deep(button) {
        border: none;
      }
    }
  }
}
</style>
