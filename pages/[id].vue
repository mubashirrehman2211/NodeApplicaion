<script lang="ts" setup>
import { onMounted } from "vue";
import ULoading from "nvd-u/components/ULoading.vue";
import { useCounterStore } from "~/store/store";

const store = useCounterStore();
onMounted(() => {
  store.filterRestaurantDetail();
  console.log(store?.filterRestaurant);
});
</script>

<template>
  <div class="ml-20 mt-4">
    <NuxtLink
      to="/"
      class="text-xl font-semibold cursor-pointer text-gray-500 router-link-exact-active"
      >Home |
    </NuxtLink>

    <NuxtLink
      :to="store?.filterRestaurent?.title"
      class="text-xl font-semibold cursor-pointer text-gray-500 router-link-exact-active"
    >
      {{ store.filterRestaurant?.title }}</NuxtLink
    >
  </div>
  <hr class="border-2" />

  <div class="all-center text-2xl font-semibold">
    Welcome To {{ store.filterRestaurant?.title }}
  </div>

  <div v-if="store.filterRestaurant" class="container all-center my-20">
    <div class="img w-[20%]">
      <img
        :src="store.filterRestaurant?.image"
        alt="sorry! This place have No image Yet"
        class="w-full shadow-sm rounded"
      />
    </div>
    <div class="content ml-40 text-start justify-start">
      <h2 class="text-3xl my-2">{{ store.filterRestaurant?.title }}</h2>
      <h4 class="text-lg text-gray-500">
        {{ store.filterRestaurant?.avg_rating }} <span class="text-2xl">★</span>
      </h4>
      <h4 class="text-xl my-2 text-gray-500">
        {{ store.filterRestaurant?.description }}
      </h4>
      <h4 class="text-lg my-1 text-gray-500">
        {{ store.filterRestaurant?.extra_services }}
      </h4>
      <button
        class="border-2 border-gray-600 bg-gray-600 py-1.5 px-5 rounded my-2 text-gray-200 font-semibold hover:bg-gray-700 hover:border-gray-700 duration-300"
      >
        <a :href="store.filterRestaurant?.link"></a>Visit
      </button>
    </div>
  </div>

  <ULoading class="all-center mt-40" v-else />
</template>

<style scoped></style>
