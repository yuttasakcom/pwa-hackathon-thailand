// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'tether/dist/js/tether.min.js'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../static/css/mystyle.css'

import configFirebase from '@/services/firebase.json'
firebase.initializeApp(configFirebase)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
