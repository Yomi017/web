<script setup lang="ts">
const { fold } = storeToRefs(usePersistHomeStore())
</script>
<template>
  <HomePinned />
</template>