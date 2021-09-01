import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'normalize.css/normalize.css'
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

import portal from "./network/conflux-portal";
portal.enable().then(() => {
  // commit("initAccount");
}).catch(err => {
  console.error(err);
});
import conflux from "./network/conflux";


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component(CollapseTransition.name, CollapseTransition)

// store.dispatch("initContract");
store.dispatch("getContract");


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
