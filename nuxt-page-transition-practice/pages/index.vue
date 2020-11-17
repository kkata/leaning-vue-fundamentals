<template>
  <div class="bg">
    <h1>Hello Transition!</h1>
    <p><NuxtLink to="/page2">Page 2</NuxtLink></p>
    <p><NuxtLink to="/page3">Page 3</NuxtLink></p>
  </div>
</template>

<script>
// export default {
//   transition: "fadeOpacity"
// };
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
.fadeOpacity-enter-active,
.fadeOpacity-leave-active {
  transition: opacity 0.35s ease-out;
}

.fadeOpacity-enter-from,
.fadeOpacity-leave-to {
  opacity: 0;
}

.bg {
  background-color: #e9c46a;
}
</style>
