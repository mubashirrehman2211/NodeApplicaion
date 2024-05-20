<script lang="ts" setup>
import { onMounted } from "vue";
import { useCounterStore } from "~/store/store";

const store = useCounterStore();
onMounted(() => {
  store.filterRestaurantDetail();
  console.log(store?.filterRestaurant);
});
</script>

<template>
  <div class="ml-40 my-10">
    <NuxtLink to="/" class="text-xl font-semibold cursor-pointer"
      >Home |
    </NuxtLink>
    <NuxtLink
      :to="store?.filterRestaurent?.title"
      class="text-xl font-semibold cursor-pointer"
    >
      {{ store.filterRestaurant?.title }}</NuxtLink
    >
  </div>

  <div class="all-center text-2xl font-semibold">
    Welcome To {{ store.filterRestaurant?.title }}
  </div>

  <div v-if="store.filterRestaurant" class="container all-center my-20">
    <div class="img w-[20%]">
      <img
        :src="store.filterRestaurant?.image"
        alt="NO IMG YET"
        class="w-full shadow-sm rounded"
      />
    </div>
    <div class="content ml-40 text-start justify-start">
      <h2 class="text-3xl my-2">{{ store.filterRestaurant?.title }}</h2>
      <h4 class="text-lg text-gray-600">
        {{ store.filterRestaurant?.avg_rating }} ⭐
      </h4>
      <h4 class="text-xl my-2 text-gray-600">
        {{ store.filterRestaurant?.description }}
      </h4>
      <h4 class="text-lg my-1 text-gray-600">
        {{ store.filterRestaurant?.extra_services }}
      </h4>
      <button
        class="border-2 border-gray-800 bg-gray-800 py-1.5 px-5 rounded my-2 text-gray-200 font-semibold hover:bg-gray-700 hover:border-gray-700 duration-300"
      >
        <a :href="store.filterRestaurant?.link"></a>Visit
      </button>
    </div>
  </div>

  <div class="all-center mt-40" v-else>......</div>
</template>

<style scoped></style>
