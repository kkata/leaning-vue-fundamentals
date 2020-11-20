<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Locations</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

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
