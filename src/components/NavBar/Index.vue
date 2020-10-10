<template>
  <div
    :class="{
      container: true,
      vertical: isXS,
      horizontal: !isXS,
      dark: !light,
      light: light
    }"
  >
    <img src="../../assets/logo.png" class="logo"></img>
    <NavItem
      v-for="(item, index) of list"
      :key="index"
      :name="item.name"
      :icon="item.icon"
      :to="item.to"
      :mode="!light ? 'light' : 'dark'"
      class="item"
    ></NavItem>
  </div>
</template>
<script>
import NavItem from "./NavItem";
export default {
  name: "NavBar",
  data() {
    return {
      // list: [
      //   { name: "首页", icon: "md-body", to: "/" },
      //   { name: "首页", icon: "md-body", to: "/" },
      //   { name: "首页", icon: "md-body", to: "/" }
      // ],
      isXS: true,
      isLight: false
    };
  },
  props: {
    list: {
      type: Array
    },
    light: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    let { clientWidth } = document.body;
    this.isXS = clientWidth < 576;
    window.onresize = e => {
      let { clientWidth } = document.body;
      this.isXS = clientWidth < 576;
    };
  },
  components: {
    NavItem
  }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  /* border: 1px solid red; */
}
.vertical {
  flex-direction: column;
  width: 8em;
  height: auto;
  padding: 0.5em;
  align-items: flex-start;
  box-shadow: 2px 2px 4px #888;
}
.horizontal {
  flex-direction: row;
  height: 50px;
  width: 100%;
  align-items: center;
}
.dark {
  background-color: #555;
}
.light {
  background-color: #cdc9c3;
}
.item {
  flex: 0 0 auto;
  height: auto;
}
.horizontal .item {
  margin: auto 1em;
}
.horizontal .logo{
  width: 20px;
  height: 20px;
  margin: 0 10px;
}
.vertical .logo{
  width: 20px;
  height: 20px;
}
</style>
