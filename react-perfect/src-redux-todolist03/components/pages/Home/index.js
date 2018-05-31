
import React, { Component } from 'react'
import './index.scss'

import Header from './Header'
import Content from './Content'

class Home extends Component {
    render () {
        return (
            <div className="home container">
                <Header/>
                <Content />
            </div>
        )
    }

}

export default Home