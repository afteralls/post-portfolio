import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import PortfolioView from '../views/PortfolioView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'Resume',
    component: AboutView
  },
  {
    path: '/portfolio',
    name: 'Recent projects',
    component: PortfolioView
  },
  {
    path: '/:notFound(.*)',
    name: "Looks like you've wandered off somewhere...",
    component: () => import('../views/NotFoundView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: '_link-active',
  linkExactActiveClass: '_link-active'
})

router.beforeEach((to, _, next) => {
  document.title = to.name
  next()
})

export default router
