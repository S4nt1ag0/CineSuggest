<template>
  <svg :width="width" :height="height" viewBox="0 0 22 26" fill="none">
    <path
      d="M20.3333 25L11 18.3333L1.66663 25V3.66667C1.66663 2.95943 1.94757 2.28115 2.44768 1.78105C2.94777 1.28095 3.62605 1 4.33329 1H17.6666C18.3738 1 19.0521 1.28095 19.5522 1.78105C20.0524 2.28115 20.3333 2.95943 20.3333 3.66667V25Z"
      stroke="white"
      stroke-width="2"
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
