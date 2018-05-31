
import React , { Component } from 'react'
import actionCreator from '../../../store/number/actionCreator'
class Control extends Component {
    render () {
        return (
            <div className="text-center">
                <button onClick = {actionCreator.controlNumber.bind(this, false)} className="btn btn-success">-</button>
                <button onClick = {actionCreator.controlNumber.bind(this, true)} className="btn btn-success">+</button>
            </div>
        )
    }
}

export default Control

//react-redux