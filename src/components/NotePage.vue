<template>
  <div>
    <!-- <NavBar></NavBar> -->
    <div class="preview-page">
      <le-preview
        :value="content"
        :is-md="isMd"
        hljs-css="zenburn"
      ></le-preview>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavBar from "../components/NavBar";
export default {
  name: "NotePage",
  data() {
    return {
      content: "### 这里没有数据哦...",
      isMd: true,
      noteTaget: "Vue",
      noteName: "2.Vue基础复习_class和style绑定"
    };
  },
  mounted() {
    axios
      .post(
        this.$apiUrl +
          `noteInfo/getNoteContent?target=Vue&name=2.Vue基础复习_class和style绑定`
      )
      .then(res => {
        const {
          status,
          data: { code, msg, data }
        } = res;
        if (code == 1001) {
          this.content = data;
        }
      });
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
.preview-page {
  width: 80%;
  padding: 1em;
}
.markdown-body {
  background-color: blanchedalmond;
}
.markdown-body h1 {
  font-size: 1.2em !important;
}
</style>
