import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from "@/views/RegisterPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import HomePage from "@/views/HomePage.vue";
import HomeModule from "@/views/module/HomeModule.vue";
import LogoutModule from "@/views/module/LogoutModule.vue";
import SeachPage from "@/views/SeachPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import HistoryPage from "@/views/HistoryPage.vue";
const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: HomePage
  },
  {
    path: '/',
    name: 'home',
    component: HomeModule
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutModule
  },
  {
    path: '/search',
    name: 'search',
    component: SeachPage
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
