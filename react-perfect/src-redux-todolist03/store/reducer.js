//reducer是一个纯函数
import _state from './state'
import {
    ADD_NEW_TODO, REMOVE_TODO
} from './const'
const reducer = (state = _state, action) => {
   //reducer不能操作原有数据也就是当前的state，而是每次都返回出一个新的状态
    let new_state = { ...state }

    switch ( action.type ) {
        case ADD_NEW_TODO:
            new_state.todos = addNewTodo(new_state.todos, action.title)
        break;
        case REMOVE_TODO:
            new_state.todos = removeTodo(new_state.todos, action.id)
        break;
        default: break;
    }
    //在这里我们要返回的是新状态
    console.log(new_state)
    return new_state
}

export default reducer


function getId(todos) {//获取新todo的id
    let arr = todos.slice().sort((a, b) => {
        return b.id - a.id
    })
    return arr.length? (arr[0].id + 1) : 1
}

function addNewTodo(todos, title) {//添加新的todo
    todos.push({id: getId(todos), title})
    return todos;
}

function removeTodo(todos, id) {
    return todos.filter(item => {
        if ( item.id === id ) return false;
        return true
    })
}