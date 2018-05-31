
import React , { Component } from 'react'
import './index.scss';

import Content from './Content'
import Control from './Control'
import ControlTwo from './ControlTwo'

class Number extends Component {
    render () {
        return (
            <div className="number container">
                <Content/>
                <Control/>
                <ControlTwo/>
            </div>
        )
    }
}

export default Number