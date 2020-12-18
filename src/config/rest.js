export default {
  LOGINMEMBER: '/login',
  BOOKS: '/buku',
  BOOKID: (id) => {
    return `/product/${id}`;
  },
  REGISTER: '/signup',
};
