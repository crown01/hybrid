
import React, { Component } from 'react'
import './index.scss'

import Banner from './Banner'
class Home extends Component {
    render () {
        console.log(this)
        return (
            <div className = "home page">
                <Banner/>
            </div>
        )
    }
}

export default Home