<template>
  <div class="bg">
    <h1>Page 2</h1>
    <p><NuxtLink to="/">Home</NuxtLink></p>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  transition: {
    name: "test",
    mode: "out-in",
    css: false,
    beforeLeave(el) {
      console.log("about before leave");
      console.log(el);
    },
    leave(el, done) {
      console.log("about leave");
      anime({
        targets: el,
        translateX: "-100%",
        duration: 1000,
        easing: "easeInOutCubic",
        complete: anim => {
          done();
        }
      });
    },
    beforeEnter(el) {
      console.log("about before enter");
    },
    enter(el, done) {
      console.log("about enter");
      anime({
        targets: el,
        translateX: ["100%", "0%"],
        duration: 1000,
        easing: "easeInOutCubic",
        complete: anim => {
          done();
        }
      });
    }
  }
};
</script>

<style scoped>
.bg {
  background-color: #e76f51;
}
</style>
