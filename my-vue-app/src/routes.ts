import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../src/layout/main-layout/MainLayout.vue'),
    children: [
      {
        name: 'Home',
        path: '',
        component: () => import('../src/pages/Home.vue'),
      },
      {
        name: 'Login',
        path: 'login',
        component: () => import('../src/pages/Login.vue'),
      },
      {
        name: 'Register',
        path: 'register',
        component: () => import('../src/pages/Register.vue'),
      },
      {
        name: 'Rov',
        path: 'rov',
        component: () => import('../src/pages/Rov.vue'),
      },
    ],
  },
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})