// router.ts
import { RouteRecordRaw } from 'vue-router';
import Home from './pages/Home.vue';
import GeneratePicture from './pages/GeneratePicture.vue';
import Products from './pages/Products.vue';
import LoadingPage from './pages/PageLoader.vue';
import DoneImageGenerate from './pages/DoneImageGenerate.vue';
import FormGeneratePicture from './pages/FormGeneratePicture.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/GeneratePicture',
    name: 'GeneratePicture',
    component: GeneratePicture,
  },
  {
    path: '/Products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/Loading',
    name: 'Loading...',
    component: LoadingPage,
  },
  {
    path: '/DoneImageGenerate',
    name: 'DoneImage',
    component: DoneImageGenerate,
  },
  {
    path: '/FormGeneratePicture',
    name: 'FormGeneratePicture',
    component: FormGeneratePicture,
  }
];

export default routes;
