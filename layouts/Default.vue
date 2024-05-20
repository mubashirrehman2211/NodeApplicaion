<script setup>

import Navbar from "~/components/Navbar.vue";
</script>

<template>

  <main class="min-h-screen flex flex-col">

    <Navbar/>

    <div class="content flex-grow-1">
      <slot/>
    </div>


  </main>
</template>

<style scoped>

</style>
