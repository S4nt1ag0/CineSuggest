<template>
  <button @click="dropped = !dropped" class="catalogButton">
    <CatalogIcon width="32px" height="32px" />
    <p>Catálogo</p>
    <ArrowRightIcon v-if="dropped" width="20px" height="20px" class="catalogArrows" />
    <ArrowDownIcon v-else width="20px" height="20px" class="catalogArrows" />
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
  data() {
    return {
      dropped: false
    }
  }
}
</script>
<style scoped lang="scss">
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

@media (max-width: 1024px) {
  .catalogButton {
    padding: 0.5rem 0.75rem;
  }
}
@media (max-width: 768px) {
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
}
</style>
