
import React, { Component } from 'react'
import './index.scss'

import Banner from '../../commons/Banner'
import GoodBox from './GoodBox'
class Home extends Component {
    render () {
        console.log(this)
        return (
            <div className = "home page">
                <Banner url = { '/mz/v4/api/billboard/home' }/>
                <GoodBox/>
            </div>
        )
    }
}

export default Home