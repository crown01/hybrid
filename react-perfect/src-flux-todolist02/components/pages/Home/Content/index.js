
import React, { Component } from 'react'
import store from '../../../../store'
import actionCreator from '../../../../store/actionCreator'
//在react中可以直接使用一个函数来表示一个组件，这个组件就叫做无状态组件
//接收一个参数为props
// let Button = props => (
//     <button className="btn btn-success">{ props.children }</button>
// )

//todo的li的组件
let TodoItem = props => {
    let removeTodo = actionCreator.removeTodo.bind(this, props.todo.id)
    return (
        <li className="list-group-item">
           {props.todo.title}
           <button onClick = {removeTodo} type="button" className="close"><span >&times;</span></button>
        </li>
    )
}

class Content extends Component {
    constructor (props) {
        super(props)
        console.log('1. 组件将store中的数据放到自己的状态中')
        this.state = {//组件将store中的数据挂载到自己的状态中
            todos: store.getState().todos
        }
    }
    componentWillMount () {
        store.addEventListener(() => {
            console.log('8. store事件的处理程序就执行了，这样的话组件再去获取最新的状态')
            //这个函数会在store的todos-change事件触发的时候触发
            //在这里可以让组件去获取最新的数据
            this.setState({todos: store.getState().todos})
        })
    }
    render () {
        let { todos } = this.state
        return (
            <ul className="list-group">
                { todos.map(item => (<TodoItem key = { item.id } todo = {item} />)) }
            </ul>
        )
    }

}

export default Content

