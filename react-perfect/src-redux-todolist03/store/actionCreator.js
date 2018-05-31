
import {
    ADD_NEW_TODO, REMOVE_TODO
} from './const'
import store from './index'
const actionCreator = {
    addNewTodo (title) {
        let action = {
            type: ADD_NEW_TODO,
            title
        }
        store.dispatch(action)
    },
    removeTodo (id) {
        let action = {
            type: REMOVE_TODO,
            id
        }
        store.dispatch(action)
    }
}

export default actionCreator