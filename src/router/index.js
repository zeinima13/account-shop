import { createRouter, createWebHistory } from 'vue-router'
import Shop from '../views/Shop.vue'
import Payment from '../views/Payment.vue'
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
    path: '/admin/products',
    name: 'admin-products',
    component: AdminProducts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
