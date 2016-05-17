import { combineReducers } from 'redux';
import { ADD_ITEM, DEL_ITEM } from '../actions/index';

const initalState = {
    items:[]
};

function aitems(state=[],action){
    switch (action.type){
        case ADD_ITEM:
            return state.concat([action.text]);
        case DEL_ITEM:
            state.splice(action.index,1);
            return [...state];
        default:
            return state;
    }
}

let todos=combineReducers({
    items:aitems
});
export default todos;