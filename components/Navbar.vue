<script lang="ts" setup></script>

<template>
  <nav class="all-center border-2 border-gray-600 bg-gray-600 h-16">
    <ul class="flex p-6 mt-3">
      <RouterLink
        class="mx-10 text-xl font-semibold text-gray-300 router-link-exact-active"
        to="/"
        >HOME</RouterLink
      >
      <li
        class="mx-10 text-xl font-semibold text-gray-300 router-link-exact-active"
      >
        ABOUT
      </li>
      <li
        class="mx-10 text-xl font-semibold text-gray-300 router-link-exact-active"
      >
        CONTACT US
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  filter: brightness(80%);
  margin-top: 0;
}
</style>
