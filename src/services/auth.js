import BaseService from './baseService';
import API from '../config/rest';

const loginMember = (username, password) => {
  return BaseService.post(API.LOGINMEMBER, { username, password });
};

export default { loginMember };
