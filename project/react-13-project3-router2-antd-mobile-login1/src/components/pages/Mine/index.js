
import React, { Component } from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'

import Login from './Login'
import User from './User'

class Mine extends Component {
    componentWillMount () {
        let { history } = this.props
        if ( !this.props.userInfo ) {
            //没有登陆，跳转到login
            history.replace('/mine/login')
        } else {
            //跳转user
            history.replace('/mine/user')
        }
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