import {
    CONTROL_NUMBER
} from './const'
import _state from './state'

const reducer = (state = _state, action) => {
    let new_state = {...state}

    switch ( action.type ) {

        case CONTROL_NUMBER:
            //操控number
            new_state.num += action.isAdd?1:-1;
        break;

        default:break;
    }

    return new_state
}

export default reducer