<template>
  <svg :width="width" :height="height" viewBox="0 0 22 26" fill="none">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.005 4L17.005 12L9.005 20L7 18L13.005 12L7 6L9.005 4Z"
      fill="white"
    />
  </svg>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: '24px'
    },
    width: {
      type: String,
      default: '24px'
    }
  }
}
</script>

<style scoped></style>
