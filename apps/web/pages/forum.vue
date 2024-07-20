<template>
  <p class="text-red-700 font-bold">Something is real</p>
  <template v-if="pending">
    <p>Data is comming</p>
  </template>
  <template v-if="error">
    <p>there was an error</p>
  </template>
  <template v-if="data">
    <p>Hello ?</p>
  </template>
</template>

<script setup lang="ts">
const { data, pending, error, refetch, clear } = await useFetch("https://api.sampleapis.com/codingresources/codingResources", { lazy: true })
</script>
