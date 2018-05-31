
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
    let { id, title, isFinished, time } = props.todo
    let removeTodo = actionCreator.removeTodo.bind(this, id)
    let changeTodoFinihsed = actionCreator.changeTodoFinished.bind(this, id)

    let date = new Date(time).format("yyyy-MM-dd hh:mm:ss")
    
    return (
        <li className="list-group-item">
           <span className = {isFinished? 'finished' : ''}>{title}</span>
           <span className="label label-default text-small">{date}</span>
           <button onClick = { removeTodo } type="button" className="close"><span >&times;</span></button>
            <input onChange = { changeTodoFinihsed } defaultChecked = {isFinished} type="checkbox" className="pull-right"/>
        </li>
    )
}

class Content extends Component {
    constructor (props) {
        super(props)
        
        this.todos = store.getState().todos
        store.subscribe(() => {
            this.todos = store.getState().todos
            this.setState({})   

        })
    }
    render () {
        let { todos } = this
        return (
            <ul className="list-group">
                { todos.map(item => (<TodoItem key = { item.id } todo = {item} />)) }
            </ul>
        )
    }

}

export default Content