
import { combineReducers } from 'redux'

import commons from './commons/reducer'
import buycar from './buycar/reducer'
const reducer = combineReducers({ commons, buycar })

export default reducer