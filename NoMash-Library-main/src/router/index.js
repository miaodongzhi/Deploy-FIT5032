import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView.vue';
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'; // Signin page
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'; // Register page
import AddBookView from '@/views/AddBookView.vue'; // Add book page
import BookList from '../views/BookList.vue'; // add BookList page
import GetBookCountView from '@/views/GetBookCountView.vue'; // add new GetBookCountView page
import WeatherView from '@/views/WeatherView.vue'; // add WeatherView page
import CountBookAPI from '@/views/CountBookAPI.vue'; // add countBookAPI page

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView, // Signin 页面
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView, // Register 页面
  },
  {
    path: '/AddBook',
    name: 'AddBook',
    component: AddBookView, // Add book 页面
  },
  {
    path: '/book-list',
    name: 'BookList',
    component: BookList, // 新增的 BookList 路由
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView, // add new book count page
  },
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    component: WeatherView, // add weather new page
  },
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI, // add CountBookAPI page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;
