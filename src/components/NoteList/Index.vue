<template>
  <div class="container">
    <div class="header">
      <Icon type="md-attach" />
      <h2 style="display:inline-block">{{ title }}</h2>
      <span class="side-btn" @click="$emit('onMoreNote')">
        <Icon type="md-refresh" color="#ffaa71" />
        {{ type == "all" ? "换一批" : "更多" }}
      </span>
    </div>
    <ul class="note-list">
      <li
        v-for="(item, index) in noteList"
        :key="item.title"
        @click="$emit('onNoteOpen', { path: item.path, name: item.name })"
      >
        <h3>{{ `# ${index + 1}. ${item.listName}` }}</h3>
        <!-- <p>{{ item.desc }}</p> -->
        <div>
          <Icon type="md-bookmark" color="#cdc9c3" />
          <small class="note-tag">{{ item.tag }}</small>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "NoteList",
  data() {
    return {
      // noteList: [
      //   {
      //     name: "1.let和const",
      //     path: "ES6",
      //     tag: "ES6",
      //     birthtime: "2020-10-10T15:24:14.394Z"
      //   }
      // ]
    };
  },
  computed: {
    noteList() {
      if (this.type == "all") {
        this.list.forEach(e => {
          e.listName = e.name.replace(/^(\d\.)/, "");
        });
      }
      return this.list;
    }
  },
  props: {
    title: {
      type: String,
      default: "标题"
    },
    list: {
      type: Array
    },
    type: {
      // 列表是什么类型的 决定显示方式和更多按钮
      validator: function(val) {
        return ["all", "target"].indexOf(val) !== -1;
      }
    }
  }
};
</script>
<style scoped>
.container {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 20px;
  transition: all 0.3s;
}
.container:hover {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 2px 2px 4px #888;
  transition: all 0.3s;
}
.header {
  padding: 5px;
  border-bottom: dashed 1px #555;
  display: flex;
  align-items: center;
  position: relative;
}
.side-btn {
  position: absolute;
  right: 2em;
  color: #ffaa71;
  user-select: none;
}
.side-btn:hover {
  color: #555;
}
.note-list {
  padding: 1em 2em;
  list-style: none;
}
.note-list li {
  margin: 20px 0;
  padding-bottom: 5px;
  user-select: none;
  border-bottom: 2px solid transparent;
}
.note-list li:hover {
  border-bottom: 2px dashed #ffaa71;
}
.note-list li p {
  margin: 5px 0 0 0;
  color: #666;
  /* background-color: rgba(240,240,220,0.5); */
  padding: 5px;
}
.note-tag {
  color: #cdc9c3;
}
</style>
