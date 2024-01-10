<template>
  <div>
    <div class="search-container">
      <input type="text" :placeholder="placeholderText" />
      <searchIcon height="24px" width="24px" />
    </div>
  </div>
</template>

<script>
import SearchIcon from '../icons/SearchIcon.vue'
export default {
  components: { SearchIcon },
  props: {
    placeholderText: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 0.2rem 0.4rem;

  input {
    background-color: transparent;
    border: none;
    color: #c0c0c0;
  }
}
.search-container:hover {
  border: solid;
  border-width: 2px;
  border-radius: 10px;
}
</style>
