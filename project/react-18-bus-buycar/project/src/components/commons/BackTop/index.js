
import React, { Component } from 'react'
import './index.scss'


class BackTop extends Component {
    constructor (props) {
        super(props)
        this.backTop = this.backTop.bind(this)
    }
    backTop () {
        let { duration } = this.props

        if ( !duration ) {
            document.documentElement.scrollTop = 0
            return false
        }

        let scrollTop = document.documentElement.scrollTop
        let x = duration/50
        let y = scrollTop/x
        let timer = setInterval(() => {
            document.documentElement.scrollTop-=y
            if ( document.documentElement.scrollTop<=0 ) {
                clearInterval(timer)
            }
        },50)  
    }
    render () {
        return (
            <div onClick = { this.backTop } className = "back-top">
                <i className="fa fa-arrow-up"></i>
            </div>
        )
    }
}

export default BackTop