
import React, { Component } from 'react'
import './index.scss'

import GroupCommons from '../../../../modules/group-commons'

class User extends Component {
    constructor (props) {
        super (props)
        this.exit = this.exit.bind(this)
    }
    exit () {
        this.props.exit()
        // this.props.history.replace('/mine/login')
    }
    shouldComponentUpdate (props) {
        if ( props.userInfo ) return true;
        return false;
    }
    render () {
       let { userInfo, exit } = this.props
        return (
            <div className = "user">
                <div className="header">
                    <div className="bg"></div>
                    <div className="user-info">
                        <div className="head-img">
                            <img src={userInfo.headimgurl} alt=""/>
                        </div>
                        <p className="username"> {userInfo.username} </p>
                        <p> <button onClick = {this.exit}  className="exit"> 注销 </button> </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupCommons(User)