
import {
    ADD_NEW_TODO,
    REMOVE_TODO,
    CHANGE_TODO_FINISHED
} from './const'

import store from './index'

const actionCreator = {
    addNewTodo ( title ) {
        store.dispatch({
            type:ADD_NEW_TODO, title, time: Date.now()
        })
    },
    removeTodo ( id ) {
        store.dispatch({
            type:REMOVE_TODO, id 
        })
    },
    changeTodoFinished ( id ) {
        store.dispatch({type: CHANGE_TODO_FINISHED, id})
    }

}

export default actionCreator