
import _state from './state'

const reducer = (state = _state, action) => {
    let new_state = {...state}

    switch (action.type) {

        default:break;
    }

    return new_state
}

export default reducer