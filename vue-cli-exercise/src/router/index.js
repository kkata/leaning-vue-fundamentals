import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About";
import Locations from "../views/Locations";

const routes = [
  {
    path: "/",
    name: "Locations",
    component: Locations,
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
