import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    data: null,
    selectedRestaurant: null,
    showBtn: false,
    filterRestaurant: null,
    selectedValue: null,
    errorMessage: "",
    err: false,
    yourLocation: null,
    city: null,
    loading: false,
    placesName: [
      "Hospitals",
      "Restaurants",
      "Petrol Station",
      "Hotels",
      "Grocery Store",
    ],
    citiesName: ["Rawalpindi", "Lahore", "Multan", "Karachi", "Peshawar"],
    cities: [
      {
        name: "Rawalpindi",
        type: null,
        lat: "33.598827",
        lng: "73.053810",
      },
      {
        name: "Lahore",
        type: null,
        lat: "31.582045",
        lng: "74.329376",
      },
      {
        name: "Multan",
        type: null,
        lat: "30.181459",
        lng: "71.492157",
      },
      {
        name: "Karachi",
        type: null,
        lat: "24.860966",
        lng: "66.990501",
      },
      {
        name: "Peshawar",
        type: null,
        lat: "34.025917",
        lng: "71.560135",
      },
    ],
  }),

  getters: {},

  actions: {
    finalRequest() {
      if (this.selectedValue && this.placeValue) {
        this.findProduct();

        this.sendRequestToServer();

        this.getDataFromServer();
        this.err = false;
      } else {
        this.err = true;
      }
    },

    async findProduct() {
      this.city = this.cities.find((item) => item.name === this.selectedValue);
      this.city.type = this.placeValue;
    },

    sendRequestToServer() {
      axios
        .post("http://localhost:5555/sending", this.city)
        .then((response) => (this.errorMessage = response.data.id));

      // console.log(this.errorMessage, "err");
    },

    getDataFromServer() {
      if (this.data) {
        this.data = null;
        this.loading = true;
      }
      // console.log(this.data, "Old data");

      if (this.city) {
        this.loading = true;
        setTimeout(() => {
          axios.get("http://localhost:5555/data").then((res) => {
            this.data = res.data;
            // console.log(this.data, "new data");
          });
        }, 6000);
      }
    },

    filterRestaurantDetail() {
      let route = useRoute();
      this.selectedRestaurant = route.params.id;
      this.filterRestaurant = this.data?.find(
        (item) => item?.title === this?.selectedRestaurant
      );
    },
  },
});
