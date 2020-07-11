import { createRouter, createWebHistory } from 'vue-router'
import routes from '../tests/routes'

const history = createWebHistory()

export default createRouter({
  history,
  strict: true,
  routes: [
    { path: '/', name: 'Home', component: import('../views/Home.vue') },
    ...routes,
  ],
})

