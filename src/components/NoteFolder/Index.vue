<template>
  <div class="container">
    <div class="data-container">
      <template v-if="notePath != ''">
        <h4>文件夹</h4>
        <p v-if="dirList.length == 0" class="empty-tip">
          <Icon type="ios-folder-open-outline" color="#1cc09f" />
          该目录下没有更多文件夹
        </p>
        <ul>
          <li
            v-for="(item, index) of dirList"
            :key="item.name"
            class="folder-container"
            @click="onFolderClick(item.path, item.name)"
          >
            {{ item.alias ? item.alias : item.name }}
          </li>
        </ul>
        <h4>笔记</h4>
        <p v-if="fileList.length == 0" class="empty-tip">
          <Icon type="ios-alert-outline" color="red" />
          该目录下没有更多笔记，或者您无权限查看
        </p>
        <ul>
          <li
            v-for="(item, index) of fileList"
            :key="item.name"
            class="folder-container"
            @click="onFileClick(item.path, item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </template>
      <template v-else>
        <div class="folder-block-container">
          <div
            v-for="(item, index) of dirList"
            :key="item.name"
            class="folder-block"
            @click="onFolderClick(item.path, item.name)"
          >
            <img :src="$apiUrl + '/images/' + item.icon" class="folder-icon" />
            <h4>{{ item.alias ? item.alias : item.name }}</h4>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "NoteFolder",
  data() {
    return {
      // path: "",
      fileList: [],
      dirList: [],
      notePath: ""
    };
  },
  methods: {
    // 文件点击打开
    onFolderClick(path, name) {
      let newPath = path == "" ? name : path + "/" + name;
      this.notePath = newPath;
      this.$emit("pathChange", newPath);
      // this.getNoteList(newPath);
    },
    // 笔记点击打开
    onFileClick(path, name) {
      this.$emit("fileOpen", { path, name });
    },
    // 获取目录下文件列表
    getNoteList(path) {
      axios
        .post(this.$apiUrl + `noteInfo/getNoteList?type=target&target=${path}`)
        .then(res => {
          let {
            status,
            data: { code, msg, data }
          } = res;
          console.log(status, code, msg, data);
          if (status == 200 && code == 1001) {
            this.fileList = data.file;
            this.dirList = data.dir;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    path(newVal, oldVal) {
      this.notePath = newVal;
      this.getNoteList(newVal);
    }
  },
  mounted() {
    this.notePath = this.path;
    this.getNoteList(this.notePath);
  },
  computed: {},
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  components: {}
};
</script>
<style scoped>
.container {
  padding: 1em;
}
.data-container {
  user-select: none;
}
.data-container ul {
  list-style: none outside;
  padding-left: 1em;
}
.folder-block-container {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}
.folder-block {
  flex: 1 0 auto;
  box-sizing: border-box;
  width: 300px;
  padding: 0.5em;
  margin: 0.5em;
  border: 1px solid #888;
  position: relative;
  border-radius: 0.5em;
}
.folder-block:hover {
  box-shadow: 2px 2px 2px #aaa;
}
.folder-block p {
  display: -webkit-box;
  font-size: 0.8em;
  color: #888;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.folder-icon {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  vertical-align: middle;
}
.empty-tip {
  color: #888;
}
</style>
