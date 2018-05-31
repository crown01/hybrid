
import React, { Component } from 'react'
import { createForm } from 'rc-form';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../../../store/commons/actionCreator'
import { Toast } from 'antd-mobile'

class LoginForm extends Component {
    constructor (props) {
        super (props)
        this.submitHandler = this.submitHandler.bind(this)
    }
    submitHandler (e) {
        e.preventDefault()
        let username = this.username.value
        let password = this.password.value
        
        this.props.login({
            username, password,
            success: () => {
                Toast.success('登陆成功!', 1, () => {
                    //跳转回mine/user
                    this.props.history.replace('/mine/user')
                });
            },
            fail: () => {
                Toast.success('登陆失败!', 1);
            }
        })
    }
    render () {
        return (
            <div className = "login-form">
                
                    <form onSubmit = {this.submitHandler} >
                        
                        <div className="input-group">
                            <input ref = {el => this.username = el} type="text" placeholder="请输入用户名" />
                        </div>
                        <div className="input-group">
                            <input ref = {el => this.password = el} type="password" placeholder="请输入密码" />
                        </div>
                        <div className="btns">
                            <button type="submit">提交</button>
                            <button type="reset">重置</button>
                        </div>
                        
                    </form>
                    
                
            </div>
        )
    }
}

export default connect(state => state, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})(createForm()(LoginForm))