import React, { Component } from 'react'
import store from '../../../store'


class Info extends Component {
    constructor (props) {
        super(props)
        this.state = {num: store.getState().todos.length}
    }
    componentWillMount () {
        store.subscribe(() => {
            this.setState({num: store.getState().todos.length})
        })
    }
    render () {
        let { num } = this.state
        return (
            <div className="alert alert-danger">
                当前共有 <span className="label label-info">{ num }</span> 条 待办事项
            </div>
        )
    }
}



export default Info