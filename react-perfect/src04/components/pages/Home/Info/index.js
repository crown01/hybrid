
import React, { Component } from 'react'

import store from '../../../../store'
class Info extends Component {
   
    constructor (props) {
        super(props)
        this.state = {
            lens: {}//已完成和未完成数量的
        }
        
    }

    componentWillMount () {
        this.getFinishedTodosLength()

        store.subscribe(() => {
            this.getFinishedTodosLength()
        })
    }

    getFinishedTodosLength () {//根据现有的todos得到当前完成的和未完成的
        let todos = store.getState().todolist.todos
        let lens = {all: todos.length, finished: 0, unfinished: 0}
        todos.forEach(item => {
            if ( item.isFinished ){
                lens.finished += 1
            } else {
                lens.unfinished += 1
            }
        });
        this.setState({lens: lens})
    }
    render () {
        let { all, finished, unfinished } = this.state.lens
        return (
            <div className="alert alert-danger">
                当前共有<span className="label label-info">{all}</span>条待办事项 ,
                其中已完成<span className="label label-info">{finished}</span>条，
                未完成<span className="label label-info">{unfinished}</span>条
            </div>
        )
    }

}

export default Info