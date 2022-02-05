import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ToDo from '../views/ToDoList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ToDo',
    component: ToDo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
