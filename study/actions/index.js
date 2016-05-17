
export const ADD_ITEM = 'add_item';
export const DEL_ITEM = 'delete_item';

export function addItem(text){
    return {
        type:ADD_ITEM,
        text
    }
}

export function delItem(index){
    return {
        type:DEL_ITEM,
        index
    }
}