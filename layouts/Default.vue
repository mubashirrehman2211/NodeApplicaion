<script setup>
import Navbar from "~/components/Navbar.vue";
</script>

<template>
  <main class="min-h-screen min-w-screen flex flex-col">
    <Navbar class="z-10" />

    <div class="content flex-grow">
      <slot />
    </div>
  </main>
</template>
