<template>
  <div class="container">
    <BackTop :height="100" :bottom="200">
      <div class="back-top">
        <Icon type="md-plane" color="#555" />
      </div>
    </BackTop>
    <div class="header">
      <!-- <span class="brother">
        <span>
          <Icon type="md-bicycle" style="transform:scaleX(-1)" />上一篇
          <span class="brother-name">{{ brother.previous }}</span>
        </span>
        <span>
          <Icon type="md-bicycle" />下一篇
          <span class="brother-name">{{ brother.next }}</span>
        </span>
      </span> -->
      <h1>{{ noteInfo.name }}</h1>
    </div>
    <div class="page">
      <div class="preview-page">
        <i class="anchor-icon"></i>
        <le-preview
          :value="content"
          :is-md="isMd"
          hljs-css="zenburn"
        ></le-preview>
      </div>
      <!-- <div class="side-page">
        <div>
          <h5>同目录笔记</h5>

          <ul>
            <li>1.Vue1</li>
            <li>2.Vue1</li>
          </ul>
        </div>
      </div> -->
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
      content: "### 没有获取到数据，可能出错了...",
      isMd: true,
      path: "Vue/组件基础\\vvv",
      brother: { previous: "1.基础类型", next: "3.类型校验" },
      tag: "Vue"
    };
  },
  props: {
    path: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    noteInfo() {
      let path = this.path;
      let name = this.name;
      this.requestNoteContent({ path, name });
      return { path: this.path, name: this.name };
    }
  },
  methods: {
    requestNoteContent(data) {
      let { path, name } = data;
      axios
        .post(
          this.$apiUrl + `noteInfo/getNoteContent?target=${path}&name=${name}`
        )
        .then(res => {
          const {
            status,
            data: { code, msg, data }
          } = res;
          if (code == 1001) {
            this.content = data.replace(/^(# .*\r\n)/, "");
            // console.log(this.content);
          }
          if (code == 5000) {
            this.content = "### 笔记不存在";
          }
          if (code == 2000) {
            this.content = "### 没有权限查看该笔记";
            this.$errorMsg("权限不足");
          }
        })
        .catch(() => {
          this.$errorMsg();
        });
    }
  },
  components: {
    NavBar
  }
};
</script>
<style scoped>
.container {
  padding: 1em;
}
span {
  user-select: none;
}
.page {
  width: 100%;
  padding: 1em 0;
}

.preview-page {
  flex: 1 0 auto;
  width: 100%;
  padding: 2em;
  /* border-radius: 0.5em; */
  outline: 1px dashed #ffaa71;
  outline-offset: -1em;
  background-color: #f1f1f8;
  position: relative;
}
.side-page {
  flex: 0 1 auto;
  height: 200px;
  width: 20%;
}

.anchor-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  background: linear-gradient(-45deg, #c0c0b9 50%, #fff 50%);
  position: absolute;
  top: 0;
  left: 0;
}
.header {
  width: 80%;
}
.header h1 {
  text-align: center;
}
.brother > span {
  margin-right: 2em;
}
.note-tag {
  color: #888;
}
.brother-name:hover {
  color: #ffaa71;
  border-bottom: 1px dashed #ffaa71;
}
.breadcrumb {
  display: block;
  padding-bottom: 1em;
  user-select: none;
  border-bottom: 1px solid #aaa;
}

.path-tag:hover {
  color: #ffaa71;
}
.path-tag-split {
  color: #888;
  margin: 0 0.3em;
}
.back-top {
  /* border: 1px solid #555; */
  box-shadow: 0px 0px 2px 1px #888;
  background-color: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
