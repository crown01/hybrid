
import React, { Component } from 'react'
import bus from '../modules/bus'
class A extends Component {
    incrementBNum () {
        bus.emit('increment')
    }
    render () {
        return (
            <div>
                <button onClick = {this.incrementBNum}>increment</button>
            </div>
        )
    }

}
export default A