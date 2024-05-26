import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    data: null,
    mainLoader: false,
    locationLoader: false,
    selectedRestaurant: null,
    filteredRestaurant: null,
    selectedValue: null,
    placeValue: null,
    err: false,
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
    currentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (location) => {
            const { latitude, longitude } = location.coords;

            this.getLocationName(latitude, longitude);

            this.locationLoader = true;

            setTimeout(() => {
              this.cities.push({
                name: this.selectedValue,
                type: null,
                lat: latitude,
                lng: longitude,
              });

              this.locationLoader = false;
            }, 3000);
          },
          (error) => {
            console.log(error.message);
          }
        );
      }
    },

    getLocationName(lat, lng) {
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            lng +
            "&key=AIzaSyC4800J442xrkb5zUzGSEHA5GHHnMmccgc"
        )
        .then((response) => {
          if (response.data.error_message) {
            this.error = response.data.error_message;
          } else {
            this.selectedValue = response.data.results[0].formatted_address;
          }
        })
        .catch((error) => {
          this.error = error.message;
        });
    },

    findProduct() {
      this.city = this.cities.find((item) => item.name === this.selectedValue);
      this.city.type = this.placeValue;
    },

    clearDataAfterNewSearch() {
      if (this.data) {
        this.data = null;
        this.mainLoader = true;
      }
    },

    sendRequestToServer() {
      this.mainLoader = true;
      axios
        .post("http://localhost:5555/sending", this.city)
        .then((response) => {
          this.data = response.data;
          localStorage.setItem("data", JSON.stringify(this.data));
          this.mainLoader = false;
        });
    },

    finalRequest() {
      if (this.selectedValue && this.placeValue) {
        this.findProduct();
        console.log(this.city, "city");
        this.sendRequestToServer();
        this.clearDataAfterNewSearch();

        this.err = false;
      } else {
        this.err = true;
      }
    },

    filterRestaurantDetail() {
      let route = useRoute();
      this.selectedRestaurant = route.params.id;
      let data = JSON.parse(localStorage.getItem("data"));
      this.filteredRestaurant = data?.find(
        (item) => item?.title === this?.selectedRestaurant
      );
    },
  },
});
