<template>
  <div class="container">
    <div class="header">
      <div class="data-box">
        已经写了<span class="data-num">{{ noteInfo.typeCount }}</span
        >类 <span class="data-num">{{ noteInfo.noteCount }}</span
        >篇笔记
      </div>
    </div>
    <div class="tag-box">
      <span
        v-for="(item, index) of noteInfo.typeList"
        :title="item.private ? '没有权限' : item.alias"
        :key="index"
        :class="{ tag: true, 'tag-private': item.private }"
        @click="onTagOpen(item)"
        ><Icon type="md-eye-off" v-if="item.private" /> {{ item.alias }}</span
      >
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "InfoCard",
  data() {
    return {
      noteInfo: {}
      // tagList:[
      //     'Vue','SSM',"数据结构","Java","JavaScript","Unity",'Vue','SSM',"数据结构","Java","JavaScript","Unity",'Vue','SSM',"数据结构","Java","JavaScript","Unity"
      // ],
      // scrollTop:0
    };
  },
  methods: {
    onTagOpen(item) {
      this.$log.jlog(item);
      if (item.private) {
        this.$errorMsg("您没有权限查看该笔记");
      } else {
        this.$emit("onTagOpen", item);
      }
    }
  },
  mounted() {
    // 获取笔记分类/数量
    axios
      .post(this.$apiUrl + "noteInfo/")
      .then(res => {
        let {
          status,
          data: { data, code, msg }
        } = res;
        if (status == 200 && code == 1001) {
          this.noteInfo = data;
        } else {
          this.$errorMsg("网络请求错误-" + status);
        }
      })
      .catch(err => {
        this.$errorMsg("网络请求错误");
      });
  }
};
</script>
<style scoped>
.container {
  width: 60%;
  height: auto;
  border-radius: 20px;
  border: dashed 2px #ffaa71;
  box-shadow: 0 0 0 10px rgba(241, 243, 248, 0.8);
  /* box-shadow: 2px 2px 5px #888; */
  /* border: 1px solid red; */
  margin: 30px auto;
  padding: 20px;
  background-color: rgba(241, 243, 248, 0.8);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  transition: background-color 0.3s;
}
.container:hover {
  background-color: rgba(241, 243, 248, 1);
  transition: background-color 0.3s;
}
.avatar {
  width: 50px;
  height: 50px;
}

.header {
  text-align: center;
  flex: 0 0 auto;
}
.data-num {
  font-size: 2.5em;
  box-sizing: border-box;
  border-bottom: 1px dashed #ffaa71;
  color: #ffaa71;
  padding: 0 0.3em;
}
.tag-box {
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.tag {
  flex: 0 0 auto;
  margin: 10px 1em;
  box-sizing: border-box;
  border-bottom: 1px dashed transparent;
  user-select: none;
  color: #555;
}
.tag-private {
  color: #888;
}
.tag:hover {
  /* text-decoration: underline dashed #ffaa71; */
  border-bottom: #ffaa71 dashed 1px;
  color: #ffaa71;
}
.tag-private:hover {
  border-bottom: 1px dashed transparent;
  color: #aaa;
}
</style>
