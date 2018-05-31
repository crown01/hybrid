
import React, { Component } from 'react'

import { List, InputItem } from 'antd-mobile'


class LoginForm extends Component {
    render () {
        return (
            <div className = "login-form">
                <List>
                    <form>
                        <InputItem
                            clear
                            placeholder="输入用户名"
                            ref={el => this.username = el}
                        >用户名</InputItem>
                        <InputItem
                            clear
                            placeholder="输入密码"
                            ref={el => this.password = el}
                        >密码</InputItem>
                    </form>
                    
                </List>
            </div>
        )
    }
}

export default LoginForm