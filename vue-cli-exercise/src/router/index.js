import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Locations from "../views/Locations";
import LocationsFromAPI from "../views/LocationsFromAPI";

const routes = [
  {
    path: "/",
    name: "Locations",
    component: Locations,
  },
  {
    path: "/locations-from-api",
    name: "LocationsFromAPI",
    component: LocationsFromAPI,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
