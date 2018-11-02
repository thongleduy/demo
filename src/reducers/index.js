import { combineReducers } from 'redux';
import products from './product';
import toggleModal from './toggleModal';
import productForEdit from './editProduct';
import carts from './cart';

const myReducer = combineReducers({
  products,
  toggleModal,
  productForEdit,
  carts
})

export default myReducer;