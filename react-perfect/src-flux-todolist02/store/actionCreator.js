
import {
    ADD_NEW_TITLE,
    REMOVE_TODO
} from './const'

import dispatcher from './dispatcher'

//actionCreator里会有一些方法，这些方法会被组件产生的用户操作调用
const actionCreator = {
    addNewTodo ( title ) {//添加新的todo的方法
        //创建一个action，交由dispatcher去处理
        //action其实就是一个带有标示性信息的一个对象
        console.log('3. actionCreator会创建一个带有标示性信息的action')
        let action = { type:ADD_NEW_TITLE, title  }
        //需要将action发送给dispatcher
        console.log('4. 将创建好的action通过dispatcher.dispatch发送给dispather')
        dispatcher.dispatch(action)
    },
    removeTodo ( id ) {//根据某个id删除
        let action = { type: REMOVE_TODO, id }
        dispatcher.dispatch(action)
    }
}

export default actionCreator