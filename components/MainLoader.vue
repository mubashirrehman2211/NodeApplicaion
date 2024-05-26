<script setup>
import { defineProps } from "vue";

defineProps({
  inline: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="all-center main-loader-parent" :class="{ 'full-page': !inline }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.main-loader-parent {
  font-size: 1em;

  &.full-page {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
    font-size: 5em;
  }
}
</style>
