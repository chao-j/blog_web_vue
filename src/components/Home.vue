<template>
  <div class="container">
    <NavBar :list="navList"></NavBar>
    <GraphBG></GraphBG>
    <InfoCard></InfoCard>
    <NoteList class="list-card" :list="noteList" title="最近"></NoteList>
    <NoteList class="list-card" :list="noteList" title="最近"></NoteList>
    <!-- <p v-for="n of 100" :key="n">{{n}}</p> -->

  </div>
</template>
<script>
import GraphBG from "../components/GraphBG";
import NavBar from "../components/NavBar";
import InfoCard from "../components/InfoCard"
import NoteList from "../components/NoteList"
export default {
  name: "Home",
  data() {
    return {
      navList: [
        { name: "首页", icon: "md-planet", to: "/", disabled: true },
        { name: "时刻", icon: "md-images", to: "/" },
        { name: "笔记库", icon: "md-folder", to: "/" },
        { name: "作品", icon: "md-code", to: "/" },
        { name: "GitHub", icon: "logo-github", to: "/" }
      ],
      noteList:[
            {title:'Vue-组件基础',tag:'Vue',desc:'HTML + CSS + JS + Vue，博主将收集到的前端学习网盘资源汇总成了可以搜索的列表。点击链接，就会同时将密码复制到剪切板，直接粘贴即可。'},
            {title:'作用域和闭包',tag:'JavaScript',desc:'HTML + CSS + JS + Vue，博主将收集到的前端学习网盘资源汇总成了可以搜索的列表。点击链接，就会同时将密码复制到剪切板，直接粘贴即可。'},
            {title:'第三人称控制',tag:'Unity3D',desc:'HTML + CSS + JS + Vue，博主将收集到的前端学习网盘资源汇总成了可以搜索的列表。点击链接，就会同时将密码复制到剪切板，直接粘贴即可。'},
            {title:'Vue Cli的用法',tag:'Vue',desc:'HTML + CSS + JS + Vue，博主将收集到的前端学习网盘资源汇总成了可以搜索的列表。点击链接，就会同时将密码复制到剪切板，直接粘贴即可。'}
      ]
    };
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
.list-card{
  width: 80%;
  margin: 0 auto;
}
</style>
