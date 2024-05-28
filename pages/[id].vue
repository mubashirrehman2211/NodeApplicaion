<script lang="ts" setup>
import { onMounted } from "vue";
import { useCounterStore } from "~/store/store";

const store = useCounterStore();

onMounted(() => {
  store.filterRestaurantDetail();
  console.log(store?.filteredRestaurant, "resss");
});
</script>

<template>
  <div class="ml-20 my-3 text-left justify-start">
    <NuxtLink
      to="/"
      class="text-xl font-semibold cursor-pointer text-gray-500 router-link-exact-active"
      >Home |
    </NuxtLink>

    <NuxtLink
      :to="store?.filteredRestaurant?.title"
      class="text-xl font-semibold cursor-pointer text-gray-500 router-link-exact-active"
    >
      {{ store.filteredRestaurant?.title }}</NuxtLink
    >
    <hr class="border-2" />
  </div>

  <div
    v-if="store.filteredRestaurant"
    class="all-center text-2xl font-semibold"
  >
    <hr class="border-2 w-full" />
    <span class="text-gray-300">></span>
    <h2 class="w-full">Welcome To {{ store.filteredRestaurant?.title }}</h2>
    <span class="text-gray-300"><</span>
    <hr class="border-2 w-full" />
  </div>

  <div
    v-if="store.filteredRestaurant"
    class="container all-center mt-20 border-2 border-gray-200 rounded m-auto w-[40%] shadow-md p-4"
  >
    <div class="img w-[20%]">
      <img
        :src="store.filteredRestaurant?.image"
        alt="sorry! This place have No image Yet"
        class="w-full shadow-sm rounded"
      />
    </div>
    <div class="content ml-40 text-start justify-start">
      <h2 class="text-3xl my-2">{{ store.filteredRestaurant?.title }}</h2>
      <h4 class="text-lg text-gray-500">
        {{ store.filteredRestaurant?.avg_rating }}
        <span class="text-2xl">★</span>
        ({{ store.filteredRestaurant?.reviews }})
      </h4>
      <h4 class="text-xl my-2 text-gray-500">
        {{ store.filteredRestaurant?.description }}
      </h4>
      <h4 class="text-lg my-1 text-gray-500">
        {{ store.filteredRestaurant?.extra_services }}
      </h4>
      <button
        class="border-2 border-gray-600 bg-gray-600 py-1.5 px-5 rounded my-2 text-gray-200 font-semibold hover:bg-gray-400 hover:border-gray-400 hover:text-gray-700 duration-500"
      >
        <a :href="store.filteredRestaurant?.link"></a>Visit
      </button>
    </div>
  </div>
  <NuxtLink to="/" class="cursor-pointe router-link-exact-active">
    <button
      class="all-center m-auto mt-3 border-2 border-gray-600 bg-gray-600 py-2 px-5 rounded text-gray-200 font-semibold hover:bg-gray-400 hover:border-gray-400 hover:text-gray-700 duration-500"
    >
      <a :href="store.filteredRestaurant?.link"></a>GO BACK
    </button>
  </NuxtLink>

  <ULoading class="all-center mt-40" v-if="!store.filteredRestaurant" />
</template>

<style scoped></style>
