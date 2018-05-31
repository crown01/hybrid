
import React, { Component } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import { NavBar, Icon  } from 'antd-mobile'
import LoginForm from './LoginForm'

class Login extends Component {
    render () {
        return (
            <div className = "login">
               <NavBar
                mode="dark"
                icon={<Link to = "/"><Icon type="left" /></Link>}
                >登陆</NavBar> 

                <LoginForm/>
            </div>
        )
    }
}

export default Login