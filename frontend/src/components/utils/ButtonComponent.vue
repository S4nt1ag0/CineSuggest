<template>
  <button :class="active ? 'active' : 'inactive'">
    <slot>{{ title }}</slot>
  </button>
</template>

<script>
export default {
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
  display: inline-block;
  padding: 0.5rem 1rem;
  border-left: 1px solid var(--color-border);
  transition: 0.4s;
  font-weight: bold;
}
.inactive {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
}
.active {
  color: var(--color-text);
}

@media (max-width: 1024px) {
  button {
    padding: 0.5rem 0.75rem;
  }
}
</style>
