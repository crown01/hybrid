

import React, { Component } from 'react'
import store from '../../../../store'

class Info extends Component {
    constructor (props) {
        super(props)

        this.state = {
            todos: store.getState().todos
        }
    }

    componentWillMount () {
        store.addEventListener(() => {
            this.setState({todos: store.getState().todos})
        })
    }

    render () {
        let { todos } = this.state
        return (
            <div className="alert alert-info">
                当前共有 <span className="label label-primary">{todos.length}</span> 条待办事项
            </div>
        )
    }
}

export default Info