import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import NotePage from "@/components/NotePage";
import NoteLib from "@/components/NoteLib";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/NoteLib",
      name: "NoteLib",
      component: NoteLib
    },
    {
      path: "/NotePage",
      name: "NotePage",
      component: NotePage
    }
  ]
});
