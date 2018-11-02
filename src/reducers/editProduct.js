import * as constants from '../constants';
var initialState = null;

var myReducer = (state = initialState, action) => {
    if (action.type === constants.EDIT_PRODUCT) {
        let data = JSON.parse(localStorage.getItem('products'));
        if (data) {
            var result = data.find(x => x.id === action.id);
            return result ? result : null;
        }
        return null;
    }
    return state;
}

export default myReducer;