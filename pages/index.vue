<script setup>
import { useCounterStore } from "~/store/store.js";

const store = useCounterStore();
</script>

<template>
  <div
    class="bg-img absolute left-0 top-0 w-screen h-screen bg-cover bg-fixed -z-10"
  ></div>

  <div
    class="absolute left-[30%] top-[30%] translate-x-[-30%] translate-y-[-20%]"
  >
    <h2 class="text-3xl font-semibold tracking-wide text-gray-300">
      Search the best Restaurant Near You.
    </h2>
    <div class="flex mt-10">
      <input
        class="mt-5 h-8 p-5 bg-gray-800 text-gray-300 text-lg outline-gray-800 rounded"
        placeholder="Enter your Location"
        type="text"
      />
      <button
        class="border-2 border-gray-600 mr-20 px-10 h-10 mt-5 bg-gray-600 rounded"
      >
        Detect
      </button>
      <input
        class="mt-5 h-8 p-5 bg-gray-800 text-gray-300 text-lg outline-gray-800 rounded"
        placeholder="Search for Restaurant"
        type="text"
      />
      <button
        class="border-2 border-gray-600 mr-20 px-10 h-10 mt-5 bg-gray-600 rounded"
        @click="store.sendRequest()"
      >
        Search
      </button>
    </div>
    <div class="mt-10 grid grid-cols-3 gap-5">
      <TransitionGroup name="list">
        <ul
          v-for="restaurant in store?.data"
          :key="restaurant"
          class="flex border-2 border-gray-300 rounded w-[100%] cursor-pointer"
        >
          <RouterLink :to="`/${restaurant?.title}`">
            <li class="text-xl font-semibold text-gray-300 mr-5">
              {{ restaurant?.title }}
            </li>
            <li class="text-xl font-semibold text-gray-300">
              {{ restaurant?.avg_rating }}⭐
            </li>
          </RouterLink>
        </ul>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.bg-img {
  background-image: url("/public/images/bg-img.jpg");
  filter: brightness(40%);
}
</style>
