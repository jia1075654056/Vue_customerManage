// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from  'axios'

//ajax
Vue.prototype.$http = axios;


Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">用户管理系统</a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link :to="{name:'Customers'}">主页</router-link></li>
              <li><router-link :to="{name:'About'}">关于我们</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><router-link :to="{name:'Add'}">添加用户</router-link></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </nav>
      <router-view></router-view>
    </div>
  `
}).$mount("#app");
