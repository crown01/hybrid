
import React, { Component } from 'react'
import './index.scss'

import Header from './Header'
import Content from './Content'
import Info from './Info'

class Home extends Component {
   
    render () {
        return (
            <div className="home container">
                <Header/>
                <Content />
                <Info/>
            </div>
        )
    }

}

export default Home