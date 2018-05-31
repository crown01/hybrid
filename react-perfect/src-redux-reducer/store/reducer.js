import { combineReducers } from 'redux'

import todolist from './todolist/reducer'
import number from './number/reducer'

const reducer = combineReducers({
    todolist,
    number
})

export default reducer