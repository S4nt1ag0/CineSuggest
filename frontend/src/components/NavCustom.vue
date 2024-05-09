<template>
  <div class="mobile-navbar">
    <ButtonComponent :active="filters.genre == ''">
      <HomeIcon width="32px" height="32px" />
      <p>Home</p>
    </ButtonComponent>

    <catalog-filter-button class="catalog-filters" />

    <ButtonComponent :active="filters.genre == ''">
      <your-list-icon width="32px" height="32px" />
      <p>Salvos</p>
    </ButtonComponent>

    <ButtonComponent :active="filters.genre == ''">
      <div class="profile-container">
        <ProfileSVG width="28px" height="28px" />
      </div>
      <p>Perfil</p>
    </ButtonComponent>
  </div>
</template>
<script>
import HomeIcon from './icons/HomeIcon.vue'
import ProfileSVG from './icons/profileSVG.vue'
import YourListIcon from './icons/yourListIcon.vue'
import ButtonComponent from './utils/ButtonComponent.vue'
import CatalogFilterButton from './utils/CatalogFilterButton.vue'

export default {
  components: {
    ButtonComponent,
    ProfileSVG,
    HomeIcon,
    YourListIcon,
    CatalogFilterButton
  },
  data() {
    return {
      filters: {
        genre: '',
        text: '',
        page: 1
      }
    }
  }
}
</script>
<style scoped lang="scss">
.mobile-navbar {
  display: none;
}

@media (max-width: 768px) {
  .mobile-navbar {
    display: flex;
    position: sticky;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    background-color: #343a3f;
    z-index: 1;
    width: 100%;
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
</style>
