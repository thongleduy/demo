import * as constants from '../constants';
var products = JSON.parse(localStorage.getItem('products'));
var initialState = products
    ? products
    : [
        {
            id: 'abc123',
            productname: 'Iphone 6S',
            price: 14000000
        },
        {
            id: 'abc456',
            productname: 'Iphone XS',
            price: 24000000
        },
        {
            id: 'cdefasd',
            productname: 'Iphone 8 Plus',
            price: 15000000
        }
    ];

var myReducer = (state = initialState, action) => {
    if (action.type === constants.LIST_ALL_PRODUCT) {
    }
    if (action.type === constants.NEW_PRODUCT) {
        let index = state.findIndex(x => x.id === action.product.id);
        if (index < 0) { state.push(action.product); }//new
        else {
            state[index] = {
                ...state[index],
                productname: action.product.productname,
                price: action.product.price,
            }
        }
        localStorage.setItem('products', JSON.stringify(state));
    }
    if (action.type === constants.REMOVE_PRODUCT) {
        let i = state.findIndex(x => x.id === action.id);
        if (i > -1) {
            state.splice(i, 1);
            localStorage.setItem('products', JSON.stringify(state));
        }
    }
    
    return [...state];
}

export default myReducer;