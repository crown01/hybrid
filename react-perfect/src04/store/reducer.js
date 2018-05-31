import { combineReducers } from 'redux'

import todolist from './todolist/reducer'

const reducer = combineReducers({
    todolist
})

export default reducer