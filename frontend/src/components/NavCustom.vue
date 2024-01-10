<template>
  <div class="catalog-filters">
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
</template>
<script>
import ButtonComponent from './utils/ButtonComponent.vue'
import SearchButton from './utils/SearchButton.vue'
export default {
  components: {
    ButtonComponent,
    SearchButton
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
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .buttons-nav-container {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
