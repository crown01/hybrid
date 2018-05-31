
import React, { Component } from 'react'
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
        </li>
    )
}

class Content extends Component {

    render () {
        let { todos } = this.props
        return (
            <ul className="list-group">
                { todos.map(item => (<TodoItem key = { item.id } todo = {item} />)) }
            </ul>
        )
    }

}

export default Content