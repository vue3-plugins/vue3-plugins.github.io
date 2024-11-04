<script setup>
import { ref } from 'vue'
// import { KatexElement } from 'vue3-katex'

defineProps({
  msg: String,
})

const count = ref(0)
const mathText = '\\frac{c_i}{1+x}'
</script>

<template>
  <h1>Math rendering using vue3-katex</h1>
  <div>The following should be a math equation:</div>
  <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
  <div>Next we try an inline math equation: <span v-katex:inline="'\\frac{b_i}{1+x}'"></span>.</div>
  <div>We should also try out the auto display option:<span v-katex:auto>\(\frac{d_i}{1+x}\)</span>, no need to escape \ here.</div>
  
  <div>Can we use the KatexElement?</div>
  <KatexElement :expression="mathText" :displayMode="true"/>
</template>

<style scoped>
</style>
