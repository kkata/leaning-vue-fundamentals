<template>
  <h1>Your Upcoming Destinations</h1>
  <div class="pagination">
    <router-link
      id="page-prev"
      :to="{ name: 'LocationsFromAPI', query: { page: page - 1 } }"
      rel="prev"
      v-if="page != 1"
      >&#60; Previous</router-link
    >
    <router-link
      id="page-next"
      :to="{ name: 'LocationsFromAPI', query: { page: page + 1 } }"
      rel="next"
      v-if="hasNextPage"
      >Next &#62;</router-link
    >
  </div>
  <div class="location-contain">
    <div class="locations" v-for="location in locations" :key="location.name">
      <Place :img="location.img" :text="location.desc">
        <h2>{{ location.name }}</h2>
      </Place>
    </div>
  </div>
</template>

<script>
import Place from "@/components/Place.vue";
import LocationService from "@/services/LocationService.js";
import { watchEffect } from "vue";

export default {
  name: "Locations",
  props: ["page"],
  components: {
    Place,
  },
  data() {
    return {
      locations: null,
      totallLocations: 0,
    };
  },
  created() {
    watchEffect(() => {
      this.events = null;
      LocationService.getLocations(2, this.page)
        .then((response) => {
          this.locations = response.data;
          this.totallLocations = response.headers["x-total-count"];
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
  computed: {
    hasNextPage() {
      const totalPages = Math.ceil(this.totallLocations / 2);
      return this.page < totalPages;
    },
  },
};
</script>

<style lang="scss">
body {
  width: 100vw;
  height: 100vh;
  font-family: "NTR", sans-serif;
  background: #eee;
}

h1 {
  text-align: center;
}

.location-contain {
  display: flex;
  justify-content: center;
}
.pagination {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 290px;
}
.pagination a {
  text-decoration: none;
  color: #2c3e50;
}
.pagination #page-prev {
  margin-right: auto;
}
.pagination #page-next {
  margin-left: auto;
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
</style>
