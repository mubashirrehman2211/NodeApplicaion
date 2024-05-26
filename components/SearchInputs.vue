<script setup>
import { useCounterStore } from "~/store/store";
import CrossHairs from "nvd-u/icons/CrossHairs.vue";

const store = useCounterStore();
</script>

<template>
  <USelect
    class="w-full"
    :options="store.placesName"
    label="select searching type"
    value="value"
    v-model="store.placeValue"
  />

  <div class="border-2 flex rounded-xl bg-white mt-10">
    <USelect
      class="w-full"
      :options="store.citiesName"
      label="Select city"
      v-model="store.selectedValue"
    />
    <button
      @click="store.currentLocation()"
      class="border-2 border-gray-600 text-2xl all-center text-gray-200 px-2 bg-gray-600 rounded hover:bg-gray-400 hover:border-gray-400 hover:text-gray-700 duration-500"
    >
      <CrossHairs class="w-full" />
    </button>
  </div>
  <P class="text-red-500 brightness-90 font-semibold mt-2" v-if="store.err"
    >something went wrong !</P
  >

  <button
    class="border-2 border-gray-600 font-semibold text-gray-200 px-10 h-12 mt-[2rem] bg-gray-600 rounded hover:bg-gray-400 hover:border-gray-400 hover:text-gray-700 duration-500"
    @click="store.finalRequest()"
  >
    Search
  </button>
</template>
