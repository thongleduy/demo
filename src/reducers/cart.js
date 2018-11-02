import * as constants from '../constants';
var carts = JSON.parse(localStorage.getItem('carts'));
var initialState = carts
    ? carts
    : [];

var myReducer = (state = initialState, action) => {
    if (action.type === constants.LIST_CART) {
        return [...state];
    }
    if (action.type === constants.ADD_TO_CART) {
        let index = state.findIndex(x => x.product.id === action.product.id);
        if (index < 0) {
            state.push({
                id: Math.random().toString(36).substr(2, 9),
                product: action.product,
                quantity: 1,
            });
        }//new
        else {
            state[index] = {
                ...state[index],
                quantity: state[index].quantity + 1
            }
        }
        localStorage.setItem('carts', JSON.stringify(state));
    }
    if (action.type === constants.REDUCE_CART) {
        let index = state.findIndex(x => x.id === action.cartId);
        if (index >= 0) {
            state[index] = {
                ...state[index],
                quantity: state[index].quantity > 0 ? state[index].quantity - 1 : 0
            }
        }
        localStorage.setItem('carts', JSON.stringify(state));
    }

    if (action.type === constants.ADD_MORE_CART) {
        let index = state.findIndex(x => x.id === action.cartId);
        if (index >= 0) {
            state[index] = {
                ...state[index],
                quantity: state[index].quantity + 1
            }
        }
        localStorage.setItem('carts', JSON.stringify(state));
    }
    if (action.type === constants.REMOVE_CART) {
        let index = state.findIndex(x => x.id === action.cartId);
        if (index >= 0) {
            state.splice(index, 1);
        }
        localStorage.setItem('carts', JSON.stringify(state));
    }
    return [...state];
}

export default myReducer;