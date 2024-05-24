<script setup>
import { useCounterStore } from "~/store/store.js";
import USelect from "nvd-u/components/USelect.vue";
import ULoading from "nvd-u/components/ULoading.vue";

const store = useCounterStore();
</script>

<template>
  <div class="bg-img absolute left-0 top-0 w-screen h-[90vh] bg-cover bg-fixed">
    <div class="absolute left-[30%] top-[25%]">
      <h2 class="text-3xl font-semibold tracking-wide text-gray-900">
        Search the best Places Near You.
      </h2>
      <div class="flex flex-col mt-5">
        <USelect
          class="w-full"
          :options="store.placesName"
          label="select searching type"
          value="value"
          v-model="store.placeValue"
        />

        <USelect
          class="w-full mt-10"
          :options="store.citiesName"
          label="Select city"
          v-model="store.selectedValue"
        />
        <P class="text-red-400 mt-0" v-if="store.err">something went wrong</P>

        <button
          class="border-2 border-gray-600 font-semibold text-gray-200 px-10 h-12 mt-[2rem] bg-gray-600 rounded hover:bg-gray-400 hover:border-gray-400 hover:text-gray-700 duration-500"
          @click="store.finalRequest()"
        >
          Search
        </button>
      </div>
      <div class="my-72 flex flex-col">
        <TransitionGroup name="list">
          <div
            v-for="restaurant in store?.data"
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
                class="border-2 border-gray-600 font-semibold text-gray-200 px-10 h-10 w-full bg-gray-600 rounded hover:bg-gray-400 hover:border-gray-400 hover:text-gray-700 duration-500"
              >
                Visit
              </button>
            </RouterLink>
          </div>
        </TransitionGroup>
        <ULoading
          v-show="store.loading"
          class="all-center text-2xl mt-10"
          v-if="!store?.data"
        />

        <div
          class="text-lg my-10 all-center text-gray-300"
          v-if="!store.loading || !store.data"
        >
          Your Search will appear here
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-img {
  background-image: url("/public/images/bg-image.png");
  filter: brightness(80%);
}
</style>
