
import React, { Component } from 'react'
import actionCreator from '../../../../store/actionCreator'
class Header extends Component {

    addNewTodo (e) {//input回车的时候
        if ( e.keyCode === 13 ) {
           let new_title = e.target.value
           //目的：更改store中的数据,需要先去调用actionCreator的方法
           console.log('2. 组件在某些情况下去调用了actionCreator的方法')
           actionCreator.addNewTodo(new_title)
           e.target.value = ''
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