
import React, { Component } from 'react'
import actioCreator from '../../../../store/actionCreator'
class Header extends Component {
    addNewTodo (e) {
        if (e.keyCode === 13) {
            let new_title = e.target.value
            //更改store的state
            actioCreator.addNewTodo(new_title)
        }
    }
    render () {
        return (
            <div className="form-group">
                <input onKeyUp = {this.addNewTodo} type="text" className="form-control" />
            </div>
        )
    }

}

export default Header