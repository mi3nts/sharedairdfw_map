import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from "axios";
import VueMoment from "vue-moment";
//import VueGTag from 'vue-gtag';

import 'leaflet-velocity/dist/leaflet-velocity';
import 'leaflet-velocity/dist/leaflet-velocity.css';

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(VueMoment);
// Vue.use(VueGTag, {
//   config: {id: 'UA-178048913-1'}
// }, router)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
