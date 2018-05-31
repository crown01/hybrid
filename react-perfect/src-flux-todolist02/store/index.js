
//store需要拥有一个能力（绑定事件和触发事件的能力）
//在这里我们从events模块中取出EventEmitter，这个东西的原型上有能绑定事件和触发事件的方法
import { EventEmitter } from 'events'
import state from './state'
//在这里，我们的store就拥有了绑定事件和触发事件的能力
const store = Object.assign({}, EventEmitter.prototype, {
    state,
    getState () {//获取state的方法
        return this.state;
    },
    getId () {//从todos里得到id最大的值，将其id+1
        let arr = this.state.todos.slice().sort((a, b) => {
            return b.id - a.id
        })
        return arr.length? (arr[0].id + 1) : 1
    },
    addNewTodo (title) {//添加新的todo的方法
        
        this.state.todos.push({
            id: this. getId(),
            title
        })   
        console.log('7. store更改了状态之后，触发自己的事件')
        this.emit('todos-change')//在这里触发事件
    },
    removeTodo (id) {
        this.state.todos = this.state.todos.filter(item => {
            if ( item.id === id ) {
                return false
            }
            return true
        })
        this.emit('todos-change')
    }, 
    addEventListener (callback) {
        //当我们执行这个方法并传入回调函数的时候，其实是在为store的todos-change事件添加事件处理程序
        this.on('todos-change', callback)
    }
})

export default store