import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router';
import { routes } from './router/routes';
import { index } from './components/index';
import AuthRequired from "./auth/AuthRequired";
import BootstrapVue from 'bootstrap-vue';
import Colxx from './components/common/Colxx'
import FormGroupColumn from "./components/customs/FormGroupColumn";
import VuePagination from "./components/common/PaginationComponent";
import { Form, HasError, AlertError } from 'vform';
import Snotify, { SnotifyPosition } from 'vue-snotify'

window.Form = Form

const snotifyOptions = {
  toast: {
    position: SnotifyPosition.rightBottom
  }
}

Vue.use(Snotify, snotifyOptions)
// Router
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.component('b-colxx', Colxx);
Vue.component('form-group-column', FormGroupColumn);
Vue.component('v-pagination', VuePagination);
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

window.axios = require('axios');

const router = new VueRouter({
	mode: 'history',
    routes,
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    /*mode: 'hash'*/
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
