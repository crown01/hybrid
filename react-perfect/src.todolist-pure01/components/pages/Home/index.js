
import React, { Component } from 'react'
import './index.scss'

import Header from './Header'
import Content from './Content'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            todos: [
                {id: 1, title: '今天是个好日子'},
                {id: 2, title: '心想的事儿都能成'}
            ]
        }
    }
    render () {
        let { todos } = this.state
        return (
            <div className="home container">
                <Header/>
                <Content todos = { todos } />
            </div>
        )
    }

}

export default Home