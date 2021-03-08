<template>
  <div class="container">
    <GraphBG :ratio="1"></GraphBG>
    <GraphBG :ratio="0.5"></GraphBG>
    <GraphBG :ratio="0.3"></GraphBG>
    <GraphBG :ratio="0.7"></GraphBG>
  </div>
</template>
<script>
import GraphBG from "../GraphBG";
export default {
  name: "ParallaxBG",
  data() {
    return {
      scrollTop: 0
    };
  },
  components: {
    GraphBG
  },
  computed: {},
  mounted() {
    // window.onscroll = e => {
    //   this.scrollTop = document.documentElement.scrollTop;
    // };
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
.graph-bg {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
