<script setup>
  import { onMounted } from 'vue'
  import { event } from 'vue-gtag'

  import DisplayMath from './components/DisplayMath.vue'
  import DisplayChemistry from './components/DisplayChemistry.vue'

  onMounted(() => {
    console.log(`the component is now mounted.`)
    event('page_mounted', { name: 'main' })
  })
  
</script>

<template>
  <display-math></display-math>
  <display-chemistry></display-chemistry>
</template>

<style scoped>
</style>
