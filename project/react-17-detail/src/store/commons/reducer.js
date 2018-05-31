
import _state from './state'

import {
    CHANGE_USER_INFO,
    REMOVE_USER_INFO
} from './const'

const reducer = (state = _state, action) => {
    let new_state = {...state}

    switch (action.type) {
        case CHANGE_USER_INFO:
            new_state.userInfo = action.userInfo;
        break;
        case REMOVE_USER_INFO: 
            new_state.userInfo = null ;
        break;
        default:break;
    }

    return new_state
}

export default reducer