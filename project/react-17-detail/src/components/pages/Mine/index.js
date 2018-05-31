
import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'

import Login from './Login'
import User from './User'

class Mine extends Component {
    componentWillReceiveProps (props) {
        console.log(111)
        let { history } = this.props
        //当用户信息变化之后
        if ( props.userInfo !== this.props.userInfo) {
            if( props.userInfo ) {
                history.replace('/mine/user')
            }else {
                history.replace('/mine/login')
            }
        }
        

        //如果进入到/mine/user后再次点击小按钮导致跳转回/mine了，我们需要重新判断是否登陆，然后再次回到/mine/user
        if ( props.location.pathname === '/mine' ) {
            this.checkLogin()
        }
    }
    componentWillMount () {
       this.checkLogin()
    }
    checkLogin () {
        let { history } = this.props
        if ( !this.props.userInfo ) {
            //没有登陆，跳转到login
            history.replace('/mine/login')
        } else {
            //跳转user
           this.ToUser()
        }
    }
    ToUser () {
        let { history } = this.props
        history.replace('/mine/user')
    }
    render () {
        return (
            <div className = "page mine">
                <Switch>
                    <Route path="/mine/login" exact component={Login} />
                    <Route path="/mine/user" exact component={User} />
                </Switch>
            </div>
        )
    }
}

export default connect(state=>state.commons)(Mine)