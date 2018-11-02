import * as consts from '../constants';
var initialState = false;
const myReducer = (state = initialState, action) => {
    if (action.type === consts.TOGGLE_MODAL_NEWPRODUCT) {
        state = action.isShow;
    }
    return state;
}
export default myReducer;