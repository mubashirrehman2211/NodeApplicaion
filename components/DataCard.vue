<script setup>
import { useCounterStore } from "~/store/store";

const store = useCounterStore();
</script>

<template>
  <TransitionGroup name="list">
    <div
      v-for="restaurant in store.data"
      :key="restaurant"
      class="all-center flex-col border-2 border-gray-300 border-b-0 rounded cursor-pointer mt-5"
    >
      <div class="text-xl font-semibold text-gray-600 mt-2">
        {{ restaurant?.title }}
      </div>
      <div class="text-xl font-semibold text-gray-600 my-2">
        {{ restaurant?.avg_rating }} <span class="text-2xl">★</span>
      </div>

      <RouterLink :to="`/${restaurant?.title}`" class="w-full">
        <button
          class="border-2 border-gray-600 font-semibold text-white px-10 h-10 w-full bg-gray-600 rounded hover:bg-gray-400 hover:border-gray-400 hover:text-white duration-500"
        >
          Visit
        </button>
      </RouterLink>
    </div>
  </TransitionGroup>

  <MainLoader v-if="store.mainLoader" class="h-screen">
    <img
      src="/public/icons8-dot-bricks.gif"
      class="w-[4%] rounded-full"
      alt="Data fetching"
    />
  </MainLoader>

  <div
    class="text-lg my-10 all-center text-gray-300"
    v-if="store.mainLoader || !store.data"
  >
    Your Search will appear here
  </div>
</template>

<style scoped></style>
