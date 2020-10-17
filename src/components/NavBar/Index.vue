<template>
  <div
    :class="{
      container: true,
      vertical: isXS,
      horizontal: !isXS,
      dark: !light,
      light: light,
      hidden: !showNav && isXS
    }"
  >
    <img src="../../assets/main-logo.png" class="logo" />
    <Icon
      type="md-swap"
      v-show="isXS"
      color="#fff"
      @click="toggleNav"
      size="20"
      :class="{ 'toggle-icon': true, 'toggle-trans': !showNav }"
    />
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
      isXS: true,
      showNav: false,
      list: [
        { name: "首页", icon: "md-planet", to: "/", disabled: true },
        { name: "时刻", icon: "md-images", to: "/" },
        { name: "笔记库", icon: "md-folder", to: "/NoteLib" },
        { name: "作品", icon: "md-code", to: "/" },
        { name: "GitHub", icon: "logo-github", to: "/" }
      ]
    };
  },
  props: {
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
      if (this.isXS) {
        this.showNav = false; //重置一下 保证每次响应式缩小时菜单都关闭
      }
    };
  },
  computed: {
    toggleColor() {
      if (this.light) {
        return "#555555";
      } else {
        return this.showNav ? "#ffffff" : "#555555";
      }
    }
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    }
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
  position: relative;
  z-index: 1000;
  /* border: 1px solid red; */
}

.vertical {
  flex-direction: column;
  width: 8em;
  height: auto;
  padding: 0.5em;
  align-items: flex-start;
  box-shadow: 2px 0px 4px #888;
  transition: all 0.5s;
  position: absolute;
}
.horizontal {
  flex-direction: row;
  height: 50px;
  width: 100%;
  align-items: center;
  transition: all 0.5s;
  position: sticky;
  top: 0;
}
.hidden {
  transform: translateX(-8.2em);
  box-shadow: none;
  /* opacity: 0; */
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
  transition: all 0.3s;
}
.horizontal .item:hover {
  transform: translateY(5px);
  transition: all 0.3s;
}
.vertical .item:hover {
  transform: translateX(5px);
  transition: all 0.3s;
}

.horizontal .logo {
  width: 30px;
  height: 30px;
  margin: 0 10px 0 20px;
}
.vertical .logo {
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
}
.toggle-icon {
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  transition: all 0.3s;
  z-index: 100;
}
.toggle-trans {
  transform: translateX(44px) rotateZ(180deg);
  padding: 5px;
  background-color: #555;
  border-radius: 50%;
  opacity: 1;
  transition: all 0.3s;
}
</style>
