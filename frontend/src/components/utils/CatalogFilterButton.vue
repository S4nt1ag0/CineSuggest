<template>
  <button @click="dropped = !dropped">
    <CatalogIcon width="32px" height="32px" />
    <p>Catálogo</p>
    <ArrowRightIcon v-if="dropped" width="20px" height="20px" />
    <ArrowDownIcon v-else width="20px" height="20px" />
  </button>
</template>

<script>
import ArrowRightIcon from '../icons/ArrowRightIcon.vue'
import ArrowDownIcon from '../icons/ArrowDownIcon.vue'
import CatalogIcon from '../icons/catalogIcon.vue'

export default {
  components: {
    CatalogIcon,
    ArrowRightIcon,
    ArrowDownIcon
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
  },
  data() {
    return {
      dropped: false
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
