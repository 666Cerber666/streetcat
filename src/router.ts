// router.ts
import { RouteRecordRaw } from 'vue-router';
import Home from './pages/Home.vue'; // Подставьте ваш компонент для домашней страницы

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

export default routes;
