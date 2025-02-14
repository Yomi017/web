<script setup lang="ts">
import { useHead } from "#imports";
import { hkustgz } from "~/config/hkustgz";
useHead({
  title: "主页",
  meta: [
    {
      name: "description",
      content: hkustgz.description,
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/testico1.ico",
    },
  ],
});
</script>

<template>
  <div class="root">
    <HomeContainer />
  </div>
  <img src="/image/testpic1.jpg" />
</template>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: calc(100dvh - 75px);
  max-width: 80rem;
  margin: 0 auto;
  padding: 17px;

  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 1000px) {
  .root {
    min-height: calc(100dvh - 63px);
    padding: 17px 10px;
  }
}
</style>
