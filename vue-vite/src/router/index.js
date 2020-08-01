import { createRouter, createWebHistory } from 'vue-router'
import routes from '../tests/routes'

const history = createWebHistory()

export default createRouter({
  history,
  strict: true,
  routes: [
    { name: '/', component: import('../components/HelloWorld.vue') },
    ...routes,
  ],
})

