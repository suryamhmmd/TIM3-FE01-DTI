import {
  Home,
  Peminjaman,
  Pengembalian,
  Keranjang,
  LoginMember,
  Register,
  LoginPustakawan,
  AdminPage,
} from '../pages';

const routes = [
  {
    path: '/adminPage',
    component: AdminPage,
    isPublic: true,
  },
  {
    path: '/loginMember',
    component: LoginMember,
    isPublic: true,
  },
  {
    path: '/loginPustakawan',
    component: LoginPustakawan,
    isPublic: true,
  },
  {
    path: '/register',
    component: Register,
    isPublic: true,
  },
  {
    path: '/keranjang',
    component: Keranjang,
    isPublic: true,
  },
  {
    path: '/peminjaman',
    component: Peminjaman,
    isPublic: true,
  },
  {
    path: '/pengembalian',
    component: Pengembalian,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
