<template>
  <div>
    <div class="search-container">
      <input
        type="text"
        :placeholder="placeholderText"
        @focus="handleFocus(true)"
        @blur="handleFocus(false)"
        v-model="filterbyName"
        @input="handleInput"
      />
      <searchIcon height="24px" width="24px" />
    </div>
  </div>
</template>

<script>
import SearchIcon from '../icons/SearchIcon.vue'
import { mapActions } from 'vuex'

export default {
  components: { SearchIcon },
  props: {
    placeholderText: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      filterbyName: '',
      timeoutId: null
    }
  },
  methods: {
    ...mapActions(['changeGenderFilter']),
    handleFocus(focused) {
      this.$emit('handleFocused', focused)
    },
    handleInput() {
      clearTimeout(this.timeoutId)

      this.timeoutId = setTimeout(() => {
        this.changeGenderFilter(this.filterbyName)
      }, 500)
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
    display: none;
  }
  ::-webkit-input-placeholder {
    color: transparent;
  }
  ::-moz-placeholder {
    color: transparent;
  }
  :-ms-input-placeholder {
    color: transparent;
  }
  :-moz-placeholder {
    color: transparent;
  }
}
.search-container:hover {
  border: solid;
  border-width: 2px;
  border-radius: 10px;
  input {
    display: block;
  }

  ::-webkit-input-placeholder {
    color: #c0c0c0;
  }
  input {
    border: none;
  }
}
</style>
