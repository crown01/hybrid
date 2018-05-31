
import React , { Component } from 'react'
import './index.scss';

import Content from './Content'
import Control from './Control'

class Number extends Component {
    render () {
        return (
            <div className="number container">
                <Content/>
                <Control/>
            </div>
        )
    }
}

export default Number