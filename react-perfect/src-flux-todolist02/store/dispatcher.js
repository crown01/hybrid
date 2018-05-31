
import { Dispatcher } from 'flux'
import {
    ADD_NEW_TITLE,
    REMOVE_TODO
} from './const'
import store from './index'
//定义好的dispatcher
const dispatcher = new Dispatcher()

//dispatcher的处理函数 在dispatcher.dispatch函数执行的时候，会触发，并且接收到传入的action对象
const handler = (action) => {
    console.log('5. dispatcher注册的处理函数执行')
   switch ( action.type ) {

       case ADD_NEW_TITLE: 
            console.log('6. dispatch根据action上的标识信息判断后调用store的方法来更改状态')
            //在这里修改store的state了，但是store的state是store自己更改的
            store.addNewTodo(action.title);
       break;//插入新的todo

       case REMOVE_TODO:
            store.removeTodo(action.id)
       break;


       default: break;
   }
}
//注册处理函数
dispatcher.register(handler)

export default dispatcher