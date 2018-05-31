
import  { 
    CONTROL_NUMBER,
    TRIPLE_NUMBER,
    DOUBLE_NUMBER_ASYNC
} from './const'
//唯手熟尔
//actionCreator目前只有一个任务，就是创建action，不需要再去dispatch

const actionCreator = {
    
    controlNumber (isAdd) {
        return {type: CONTROL_NUMBER, isAdd}
    },
    tripleNumber () {
        return {type: TRIPLE_NUMBER}
    },
    doubleNumberAsync () {
        return dispatch => {//在这里就可以做异步操作了，操作完成后，手动的进行dispatch
            setTimeout(() => {
                let action = { type: DOUBLE_NUMBER_ASYNC }              
                dispatch(action)
            }, 1000);
        }
    }
}

export default actionCreator