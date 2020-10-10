<template>
  <div class="container">
    <NavBar :list="navList"></NavBar>
    <GraphBG></GraphBG>
  </div>
</template>
<script>
import GraphBG from "../components/GraphBG";
import NavBar from "../components/NavBar";
export default {
  name: "Home",
  data() {
    return {
      navList: [
        { name: "首页", icon: "md-planet", to: "/", disabled: true },
        { name: "时刻", icon: "md-images", to: "/" },
        { name: "笔记库", icon: "md-folder", to: "/" },
        { name: "作品", icon: "md-code", to: "/" },
        { name: "GitHub", icon: "logo-github", to: "/" }
      ]
    };
  },
  components: {
    GraphBG,
    NavBar
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 500px;
  /* background-color: aqua; */
}
</style>
