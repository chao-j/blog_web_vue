<template>
  <span class="container">
    <Icon
      :type="icon"
      :color="this.mode == 'light' ? '#cdc9c3' : '#555'"
      class="item-icon"
    />
    <span
      :class="{
        'item-name': true,
        dark: this.mode != 'light',
        light: this.mode == 'light'
      }"
      >{{ name }}</span
    >
  </span>
</template>
<script>
export default {
  name: "NavItem",
  data() {
    return {};
  },

  props: {
    name: { type: String, default: "路由" },
    icon: { type: String, default: "md-bookmark" },
    to: { type: String, default: "/" },
    mode: {
      validator: function(val) {
        return ["dark", "light"].indexOf(val) !== -1;
      }
    }
  }
};
</script>
<style scoped>
.item-name {
  flex: 0 0 auto;
  user-select: none;
  margin-left: 0.4em;
}
.dark {
  color: #555;
}
.light {
  color: #cdc9c3;
}
.light:hover {
  color: #fff;
}
.dark:hover {
  color: #000;
}
.item-icon {
  flex: 0 0 auto;
}
.container {
  display: inline-block;
  height: 2em;
  text-align: center;
  display: flex;
  align-items: center;
}
</style>
