
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
    return (
        <li className="list-group-item">
           {props.todo.title}
           <button onClick = {actionCreator.removeTodo.bind(this, props.todo.id)} type="button" className="close"><span >&times;</span></button>
        </li>
    )
}

class Content extends Component {
    constructor (props) {
        super(props)
        this.state = {
            todos: store.getState().todos
        }
    }
    componentWillMount () {
        store.subscribe(() => {//传入的回调函数会在状态发送改变的时候触发
            this.setState({
                todos: store.getState().todos
            })
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