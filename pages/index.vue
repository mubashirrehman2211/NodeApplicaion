<script setup>
import { useCounterStore } from "~/store/store.js";
import ULoading from "nvd-u/components/ULoading.vue";
import DataCard from "~/components/DataCard.vue";
import SearchInputs from "~/components/SearchInputs.vue";

const store = useCounterStore();
</script>

<template>
  <div
    class="bg-img absolute left-0 top-0 w-screen h-[90vh] bg-cover bg-center bg-fixed"
  >
    <div class="absolute left-[30%] top-[25%]">
      <h2 class="text-3xl font-semibold tracking-wide text-gray-50">
        Search the best Places Near You.
      </h2>
      <div class="flex flex-col mt-5">
        <SearchInputs />
      </div>
      <div class="my-72 flex flex-col">
        <DataCard />
      </div>
    </div>
  </div>

  <MainLoader v-if="store.locationLoader">
    <img
      src="/public/icons8-location-update.gif"
      class="w-[5%] rounded-full"
      alt="location-loader"
    />
  </MainLoader>

  <MainLoader v-if="store.mainLoader">
    <img
      src="/public/icons8-dot-bricks.gif"
      class="w-[4%] rounded-full"
      alt="Data fetching"
    />
  </MainLoader>

 
</template>

<style scoped>
.bg-img {
  background-image: url("/public/images/bg-image.png");
  filter: brightness(80%);
}
</style>
