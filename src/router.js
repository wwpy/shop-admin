import Vue from 'vue'
import Router from 'vue-router'

import routes from "./common/config/router.js"

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes
})

export default router