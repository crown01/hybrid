
import React, { Component } from 'react'
import bus from '../modules/bus'
class B extends Component {
    constructor (props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    increment () {
        this.setState({num: ++this.state.num})
    }

    componentWillMount () {
        bus.on('increment', () => {
            this.increment()
        })
    }

    render () {
        return (
            <div>
                <span> {this.state.num} </span>
            </div>
        )
    }

}
export default B