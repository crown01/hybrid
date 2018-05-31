
import React, { Component } from 'react'
import actionCreator from '../../../../store/todolist/actionCreator'
class Header extends Component {
    
    constructor (props) {
        super(props)
        this.state = { message: '' }
        //在es6类的组件写法中，当我们传递类方法到子组件或者绑定在dom事件上的时候，方法里的this会丢失
        //所以我们需要在某一个初始化阶段的钩子函数里执行， 一般情况下是放在constructor中
        this.keyUpHandler = this.keyUpHandler.bind(this)
    }

    keyUpHandler (e) {
        if ( e.keyCode === 13 ) {
            let title = e.target.value
            if ( !title ) {
                this.showMessage()
                return false;
            }
            actionCreator.addNewTodo(title)
            e.target.value = ''
        }
    }

    showMessage () {//显示提示
        this.setState({message: 'title不能为空'})
        setTimeout(() => {
            this.setState({message: ''})
        }, 1000);
    }

    render () {
        return (
            <div className="form-group">
                <label className="label label-danger">{ this.state.message }</label>
                <input onKeyUp = { this.keyUpHandler } type="text" className="form-control" />
            </div>
        )
    }

}

export default Header