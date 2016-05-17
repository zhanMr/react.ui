import { combineReducers } from 'redux'
function addFile(state = [], action){
    switch(action.type){
        case 'ADD_FILE':
            return [...state, action.text]
        case 'ADD_FILES':
            return [...state, action.text]
        default:
            return state
    }
}

const todoApp = combineReducers({
    addFile
});
export default todoApp;