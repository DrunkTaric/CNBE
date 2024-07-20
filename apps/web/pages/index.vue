<script lang="ts" setup>
const colorMode = useColorMode()
</script>

<template>
  <section class="w-full h-full flex justify-center items-center">
    <div class="w-[20rem] h-[10rem] rounded-xl animate-pulse bg-loading">
    </div>
  </section>
  <div>
    <select v-model="$colorMode.preference">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>
