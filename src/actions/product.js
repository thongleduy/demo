import * as consts from '../constants';
export const removeProduct = (id) => {
    return {
        type: consts.REMOVE_PRODUCT,
        id
    }
}
export const editProduct = (id) => {
    return {
        type: consts.EDIT_PRODUCT,
        id
    }
}
export const addProduct = (product) => {
    return {
        type: consts.NEW_PRODUCT,
        product
    }
}
export const toggleModal = (isShow) => {
    return {
        type: consts.TOGGLE_MODAL_NEWPRODUCT,
        isShow
    }
}

export const addToCart = (product) => {
    return {
        type: consts.ADD_TO_CART,
        product
    }
}
export const listCart = () => {
    return {
        type: consts.LIST_CART,
    }
}
export const reduceCart = (cartId) => {
    return {
        type: consts.REDUCE_CART,
        cartId
    }
}
export const addMoreCart = (cartId) => {
    return {
        type: consts.ADD_MORE_CART,
        cartId
    }
}
export const removeCart = (cartId) => {
    return {
        type: consts.REMOVE_CART,
        cartId
    }
}