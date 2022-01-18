import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import underMaintenance from '@/views/UnderMaintenance.vue'
import DefaultLayout from "@/views/Default.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      component: Login,
      meta: {
        rule: "isPublic"
      }
    },
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "/dashboard",
          component: Dashboard,
          // meta: {
          //   rule: "isPublic",
          //   auth: true
          // }
        },
        {
          path: "/maintenance",
          component: underMaintenance,
          // meta: {
          //   rule: "isPublic",
          //   auth: true
          // }
        },
      ]
    }
  ]
})