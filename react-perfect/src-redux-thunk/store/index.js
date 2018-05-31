
import { createStore, applyMiddleware } from 'redux'
//redux中间件
import thunk from 'redux-thunk'

import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(thunk))//使用中间件

export default store