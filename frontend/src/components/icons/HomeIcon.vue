<template>
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 12L16 2.66667L28 12V26.6667C28 27.3739 27.7191 28.0521 27.2189 28.5523C26.7188 29.0524 26.0405 29.3333 25.3333 29.3333H6.66667C5.95943 29.3333 5.28115 29.0524 4.78105 28.5523C4.28095 28.0521 4 27.3739 4 26.6667V12Z"
      stroke="white"
      stroke-width="2.35714"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 29.3333V16H20V29.3333"
      stroke="white"
      stroke-width="2.35714"
      stroke-linecap="round"
      stroke-linejoin="round"
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
