import BaseService from './baseService';
import API from '../config/rest';

const loginMember = (username, password) => {
  return BaseService.post(API.LOGINMEMBER, { username, password });
};

const loginAdmin = (username, password) => {
  return BaseService.post(API.LOGINADMIN, { username, password });
};

const registerAdmin = (
  name,
  username,
  email,
  birthdate,
  gender,
  province,
  city,
  street,
  password,
  phone
) => {
  const address = {
    province,
    city,
    street,
  };
  return BaseService.post(API.REGISTERADMIN, {
    name,
    username,
    email,
    birthdate,
    gender,
    address,
    password,
    phone,
  });
};
export default { loginMember, loginAdmin, registerAdmin };
