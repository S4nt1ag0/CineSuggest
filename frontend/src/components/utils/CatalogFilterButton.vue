<template>
  <button>
    <CatalogIcon width="32px" height="32px" />
    <p>Catálogo</p>
  </button>
</template>

<script>
import CatalogIcon from '../icons/catalogIcon.vue'

export default {
  components: {
    CatalogIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
button {
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

@media (max-width: 1024px) {
  button {
    padding: 0.5rem 0.75rem;
  }
}
</style>
