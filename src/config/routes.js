import { Home, Peminjaman, Pengembalian, Keranjang } from '../pages';

const routes = [
  {
    path: '/keranjang',
    component: Keranjang,
    isPublic: false,
  },
  {
    path: '/peminjaman',
    component: Peminjaman,
    isPublic: false,
  },
  {
    path: '/pengembalian',
    component: Pengembalian,
    isPublic: false,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
