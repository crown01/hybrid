
import React , { Component } from 'react'
import store from '../../../store'
class Content extends Component {
    constructor (props) {
        super(props)
        this.state = { num: store.getState().number.num }

        store.subscribe(() => {
            this.setState({ num: store.getState().number.num })
        })
    }
    render () {
        let { num } = this.state
        return (
            <div>
                <h2 className="text-center">{num}</h2>
            </div>
        )
    }
}

export default Content