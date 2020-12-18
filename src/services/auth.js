import BaseService from './baseService';
import API from '../config/rest';

const loginMember = (email, password) => {
  return BaseService.post(API.LOGINMEMBER, { email, password });
};
const book = () => {
  return BaseService.get(API.BOOKS);
};

export default { loginMember, book };
