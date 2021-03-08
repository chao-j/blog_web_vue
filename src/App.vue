<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  },
  mounted() {
    this.$log.jlog(`当前环境:${this.$apiUrl}`);
  }
};
</script>

<style>
#app {
}
</style>
