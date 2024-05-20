import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    data: null,
    selectedRestaurant: null,
    filterRestaurant: null,
  }),

  getters: {},

  actions: {
    async sendRequest() {
      await axios.get("https://node-server-sage.vercel.app/").then((res) => {
        this.data = res.data;
        console.log(this.data, "data");
        localStorage.setItem("data", JSON.stringify(this.data));
      });
    },

    filterRestaurantDetail() {
      let p = localStorage.getItem("data");
      p = JSON.parse(p);
      let route = useRoute();
      this.selectedRestaurant = route.params.id;
      this.filterRestaurant = p.find(
        (item) => item?.title === this?.selectedRestaurant
      );
    },
  },
});
