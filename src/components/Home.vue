<template>
  <div class="container">
    <!-- <keep-alive>
      <NavBar></NavBar>
    </keep-alive> -->
    <GraphBG></GraphBG>
    <InfoCard></InfoCard>
    <NoteList
      class="list-card"
      :list="noteList"
      title="最近"
      type="all"
    ></NoteList>
    <NoteList
      class="list-card"
      :list="noteList"
      title="最近"
      type="target"
    ></NoteList>
    <!-- <p v-for="n of 100" :key="n">{{n}}</p> -->
    <footer>
      <a href="http://www.zhaocj.top">www.zhaocj.top</a>
      <a href="http://www.beian.miit.gov.cn/">黔ICP备19013356号</a>
    </footer>
  </div>
</template>
<script>
import GraphBG from "../components/GraphBG";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard";
import NoteList from "../components/NoteList";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      noteList: []
    };
  },
  mounted() {
    axios
      .post(this.$apiUrl + "noteInfo/getNoteList?type=all")
      .then(res => {
        let {
          status,
          data: { data, code, msg }
        } = res;
        if (status == 200 && code == 1001) {
          // console.log(data);
          this.noteList = JSON.parse(JSON.stringify(data));
        } else {
          this.$errorMsg(msg);
        }
      })
      .catch(err => {
        this.$errorMsg("网络请求出错");
      });
  },
  components: {
    GraphBG,
    NavBar,
    InfoCard,
    NoteList
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: auto;
  /* background-color: aqua; */
}
.list-card {
  width: 80%;
  margin: 20px auto;
}
footer {
  text-align: center;
  padding: 20px 0;
}
footer a {
  color: #555;
}
footer a::after {
  content: "|";
  margin: 0 1em;
}
footer a:last-child::after {
  content: "";
  margin: 0;
}
</style>
