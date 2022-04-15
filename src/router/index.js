import { createRouter, createWebHistory } from 'vue-router'
// import store from '../store/'
// import { nextTick } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Home.vue'),
    meta: {
      layout: 'main',
      auth: false,
    },
  },
]

const router = createRouter({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next) => {
//   const requireAuth = to.meta.auth

// if (requireAuth && store.getters['auth/isAuthenticated']) {
//   next()
// } else if (requireAuth && !store.getters['auth/isAuthenticated']) {
//   next('/auth?message=auth')
// } else {
//   next()
//   // }
// })

export default router
