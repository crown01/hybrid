
import _state from './state'
import {
    CONTROL_NUMBER,
    TRIPLE_NUMBER
} from './const'
const reducer = (state = _state, action) => {
    let new_state = {...state}

    switch ( action.type ) {

        case CONTROL_NUMBER:
            new_state.num += action.isAdd? 1 : -1
        break;

        case TRIPLE_NUMBER:
            new_state.num *= 3
        break;

        default: break;
    }

    return new_state
}

export default reducer