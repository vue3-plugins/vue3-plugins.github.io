<script setup>
import { ref } from 'vue'
// import { KatexElement } from 'vue3-katex'

defineProps({
  msg: String,
})

const count = ref(0)
const chemistryText = '\\ce{CO2 + C -> 2 CO}'
</script>

<template>
  <h1>Chemistry rendering using vue3-katex</h1>
  <div>The following should be a chemistry equation:</div>
  <div v-katex:display="'\\ce{CO2 + C -> 2 CO}'"></div>
</template>

<style scoped>
</style>
