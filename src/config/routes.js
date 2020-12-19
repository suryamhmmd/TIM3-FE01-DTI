import { Home, Login, Admin, Register, Input } from '../pages';

const routes = [
  {
    path: '/inputBook',
    component: Input,
    isPublic: true,
  },
  {
    path: '/register',
    component: Register,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/login/:admin',
    component: Admin,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
