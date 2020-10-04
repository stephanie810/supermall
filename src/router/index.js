import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/Home')
const Cart = () => import('../views/Cart/Cart')
const Category = () => import('../views/Category/Category')
const Profile = () => import('../views/Profile/Profile')


const routes = [
  {
    path: '',
    name: 'Home',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:Profile
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
