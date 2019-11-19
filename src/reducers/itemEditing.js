import * as Types from './../constants/ActionTypes';

var initalState = {};

const itemEditing =(state = initalState,action) =>{
    switch(action.type){
        case Types.EDIT_PRODUCT:
            return action.product
        default: return state;
    }
}
export default itemEditing;