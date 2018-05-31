import {
    CONTROL_NUMBER
} from './const'
import store from '../index'
const actionCreator = {
    controlNumber ( isAdd ) {
        store.dispatch({ type: CONTROL_NUMBER, isAdd })
    }
}
export default actionCreator