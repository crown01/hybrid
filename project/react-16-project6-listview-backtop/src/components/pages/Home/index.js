
import React, { Component } from 'react'
import './index.scss'

import Banner from './Banner'
import GoodBox from './GoodBox'
class Home extends Component {
    render () {
        console.log(this)
        return (
            <div className = "home page">
                <Banner/>
                <GoodBox/>
            </div>
        )
    }
}

export default Home