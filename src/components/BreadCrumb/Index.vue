<template>
  <ul class="container">
    <li class="breadcrumb-item">
      <Icon type="ios-apps" />
      <span class="item-text" @click="$emit('click', -1)">笔记</span>
      <i class="item-split">/</i>
    </li>
    <li v-for="(item, index) of pathList" :key="item" class="breadcrumb-item">
      <span class="item-text" @click="$emit('click', index)">{{ item }}</span>
      <i class="item-split">/</i>
    </li>
  </ul>
</template>
<script>
export default {
  name: "BreadCrumb",
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  computed: {
    pathList() {
      if (this.path == "") return [];
      return this.path.split(/[\\|/]/);
    }
  }
};
</script>
<style scoped>
.container {
  border-bottom: 1px solid #888;
  padding: 0.5em 0;
}
.breadcrumb-item {
  display: inline;
  user-select: none;
}
.breadcrumb-item .item-text:hover {
  color: #ffaa71;
}
.item-split {
  display: inline-block;
  margin: 0 0.5em;
}
</style>
