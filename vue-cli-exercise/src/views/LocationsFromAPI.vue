<template>
  <h1>Your Upcoming Destinations</h1>
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
import EventService from "@/services/EventService.js";

export default {
  name: "Locations",
  components: {
    Place,
  },
  data() {
    return {
      locations: null,
    };
  },
  created() {
    EventService.getEvent()
      .then((response) => {
        this.locations = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
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
</style>
