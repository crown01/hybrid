
import  { 
    CONTROL_NUMBER,
    TRIPLE_NUMBER
} from './const'

//actionCreator目前只有一个任务，就是创建action，不需要再去dispatch

const actionCreator = {
    
    controlNumber (isAdd) {
        return {type: CONTROL_NUMBER, isAdd}
    },
    tripleNumber () {
        return {type: TRIPLE_NUMBER}
    }

}

export default actionCreator