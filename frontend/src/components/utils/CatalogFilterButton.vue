<template>
  <div class="catalog_filter_container">
    <button @click="dropped = !dropped" class="catalogButton">
      <CatalogIcon width="32px" height="32px" />
      <p>Catálogo</p>
      <ArrowRightIcon v-if="dropped" width="20px" height="20px" class="catalogArrows" />
      <ArrowDownIcon v-else width="20px" height="20px" class="catalogArrows" />
    </button>
    <div class="catalog_filter_content" v-if="dropped">
      <ButtonComponent
        v-for="genre in genreCatalog"
        :key="genre.label"
        @click="
          () => {
            changeGenreFilter(genre.value)
          }
        "
        >{{ genre.label }}</ButtonComponent
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ArrowRightIcon from '../icons/ArrowRightIcon.vue'
import ArrowDownIcon from '../icons/ArrowDownIcon.vue'
import CatalogIcon from '../icons/catalogIcon.vue'
import ButtonComponent from './ButtonComponent.vue'

export default {
  components: {
    CatalogIcon,
    ArrowRightIcon,
    ArrowDownIcon,
    ButtonComponent
  },
  data() {
    return {
      dropped: false,
      genreCatalog: [
        { value: 'Action', label: 'Ação' },
        { value: 'Adventure', label: 'Aventura' },
        { value: 'Horror', label: 'Terror' },
        { value: 'Mystery', label: 'Misterio' },
        { value: 'Comedy', label: 'Comédia' },
        { value: 'Drama', label: 'Drama' },
        { value: 'Science Fiction', label: 'Ficção Cientifica' },
        { value: 'Fantasy', label: 'Fantasia' },
        { value: 'Thriller', label: 'Suspense' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Animation', label: 'Animação' }
      ]
    }
  },
  methods: {
    ...mapActions(['changeGenreFilter'])
  }
}
</script>
<style scoped lang="scss">
.catalog_filter_container {
  position: relative;
  .catalogButton {
    background-color: transparent;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    transition: 0.4s;
    font-weight: bold;
    color: var(--color-text);
  }
  .catalog_filter_content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50px;
    background-color: #343a3f;
    min-width: 200px;
    border-radius: 10px;
    max-height: 220px;
    flex-wrap: wrap;
    width: max-content;
    button {
      border-right-style: solid;
      border-bottom-style: solid;
      border-width: 1px;
      border-color: #c0c0c0;
      width: 200px;
      color: #c0c0c0;
    }
    button:hover {
      cursor: pointer;
      background-color: #6d7175;
    }
  }
}

@media (max-width: 1024px) {
  .catalog_filter_container {
    .catalogButton {
      padding: 0.5rem 0.75rem;
    }
  }
}
@media (max-width: 768px) {
  .catalog_filter_container {
    .catalogButton {
      display: flex;
      flex-direction: column;

      p {
        margin-top: 5px;
      }
      .catalogArrows {
        display: none;
      }
    }
    .catalog_filter_content {
      top: -220px;
      left: -75px;
      button {
        width: 160px;
      }
    }
  }
}
</style>
