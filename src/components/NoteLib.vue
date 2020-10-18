<template>
  <div>
    <div class="breadcrumb">
      <BreadCrumb :path="path" @click="breadcrumbClick"></BreadCrumb>
    </div>
    <template v-if="!isShowPage">
      <NoteFolder
        :path="path"
        @pathChange="pathChange"
        @fileOpen="fileOpen"
      ></NoteFolder>
    </template>
    <template v-else>
      <NotePage :path="path" :name="name"></NotePage>
    </template>
  </div>
</template>
<script>
import axios from "axios";
import NoteFolder from "../components/NoteFolder";
import NotePage from "../components/NotePage";
import BreadCrumb from "../components/BreadCrumb";
export default {
  name: "NoteLib",
  data() {
    return {
      target: "Vue",
      path: "",
      name: "",
      isShowPage: false
    };
  },
  methods: {
    // 导航栏点击
    breadcrumbClick(index) {
      let pathList = this.path.split(/[\\|/]/);
      if (index == -1) {
        this.path = "";
      } else if (index < pathList.length - 1) {
        this.path = pathList.splice(index, 1).join("/");
      }
      console.log(this.path);
      this.isShowPage = false;
    },
    // NoteFolder内部点击了文件夹，路劲改变
    pathChange(path) {
      this.isShowPage = false;
      this.path = path;
    },
    // NoteFolder内部点击了笔记，打开笔记
    fileOpen(data) {
      let { path, name } = data;
      this.path = path;
      this.name = name;
      this.isShowPage = true;
    }
  },
  mounted() {},
  components: {
    NoteFolder,
    BreadCrumb,
    NotePage
  }
};
</script>
<style scoped></style>
