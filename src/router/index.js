import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue'),
  },
  {
    path: '/layout',
    name: 'Layout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Layout.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
      },
      {
        path: '/todo',
        name: 'Todo',

        component: () => import(/* webpackChunkName: "about" */ '../views/Todo.vue'),
      },
      {
        path: '/shoppingcart',
        name: 'ShoppingCart',

        component: () => import(/* webpackChunkName: "about" */ '../views/ShoppingCart.vue'),
      },
      {
        path: '/list',
        name: 'List',

        component: () => import(/* webpackChunkName: "about" */ '../views/List.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
