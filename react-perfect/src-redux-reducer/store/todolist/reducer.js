
import _state from './state'

import {
    ADD_NEW_TODO,
    REMOVE_TODO,
    CHANGE_TODO_FINISHED
} from './const'

const reducer = (state = _state , action) => {
    let new_state = { ...state }//新状态

    switch ( action.type ) {
        case ADD_NEW_TODO:
            //添加新的todo
            new_state.todos = handler.addNewTodo(new_state.todos, action);
        break;

        case REMOVE_TODO:
            //根据id删除一个元素
            new_state.todos = handler.removeTodoById(new_state.todos, action.id)
        break;

        case CHANGE_TODO_FINISHED:
            //更改todo的完成情况
            new_state.todos = handler.changeTodoFinished(new_state.todos, action.id)
        break;

        default:break;
    }

    return new_state;

}
//处理器
const handler = {
    addNewTodo (todos, { title, time }) {
        todos.push({title, id: this.getIdFromTodos(todos), isFinished: false, time })
        return todos
    },
    getIdFromTodos (todos) {//获取最大id的
        if ( !todos.length ) return 1;
        let arr = todos.slice().sort((a,b) => {
            return b.id - a.id
        })
        return arr[0].id + 1
    },
    //根据id删除一个元素
    removeTodoById (todos, id) {
        return todos.filter(item => {
            if ( item.id === id ) return false;
            return true;
        })
    },
    changeTodoFinished (todos, id) {//更改完成情况
        todos.forEach(item => {
            if ( item.id === id ) {
                item.isFinished = !item.isFinished
            }
        })
        return todos
    }
}

export default reducer


