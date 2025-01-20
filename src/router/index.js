import { createRouter, createWebHashHistory } from 'vue-router'
import Shop from '../views/Shop.vue'
import Payment from '../views/Payment.vue'
import AdminLogin from '../views/admin/Login.vue'
import AdminProducts from '../views/admin/Products.vue'

const routes = [
  {
    path: '/',
    name: 'shop',
    component: Shop
  },
  {
    path: '/payment',
    name: 'payment',
    component: Payment
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: AdminLogin
  },
  {
    path: '/admin/products',
    name: 'admin-products',
    component: AdminProducts,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHashHistory('./'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      next({
        path: '/admin/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
