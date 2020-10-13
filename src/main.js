// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
import { ServerUtil } from "./utils/serverUtil";

Vue.use(ViewUI);
Vue.config.productionTip = false;

Vue.prototype.$apiUrl = new ServerUtil().apiUrl;
Vue.prototype.$errorMsg = function(msg = "发生错误，请刷新重试") {
  this.$Message.error({
    content: msg,
    duration: 3,
    closable: true,
    background: true
  });
};
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
