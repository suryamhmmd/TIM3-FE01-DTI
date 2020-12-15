import { Home } from '../pages';

const routes = [
  {
    path: '/Home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
