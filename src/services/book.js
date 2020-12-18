import BaseService from './baseService';
import API from '../config/rest';

const book = () => {
  return BaseService.get(API.BOOKS);
};

const bookDetail = () => {
  return BaseService.get(API.BOOKID);
};

export default { book, bookDetail };
