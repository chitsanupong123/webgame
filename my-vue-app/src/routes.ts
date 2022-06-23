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
      {
        name: 'LoL',
        path: 'lol',
        component: () => import('../src/pages/LoL.vue'),
      },
      {
        name: 'Hon',
        path: 'hon',
        component: () => import('../src/pages/Hon.vue'),
      },
      {
        name: 'Fifa',
        path: 'fifa',
        component: () => import('../src/pages/Fifa.vue'),
      },
      {
        name: 'Help',
        path: 'help',
        component: () => import('../src/pages/Help.vue'),
      },
      {
        name: 'Record',
        path: 'record',
        component: () => import('../src/pages/Record.vue'),
      },
      // {
      //   name: 'HomeAdmin',
      //   path: 'homeAdmin',
      //   component: () => import('../src/pages/HomeAdmin.vue'),
      // },
      {
        name: 'Notification',
        path: 'notification',
        component: () => import('../src/pages/Notification.vue'),
      },
      {
        name: 'Admin',
        path: 'Admin',
        component: () => import('../src/pages/Admin.vue'),
      },
    ],
  },
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})