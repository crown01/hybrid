
import React , { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../../store/number/actionCreator'

class ControlTwo extends Component {
    render () {
       let { tripleNumber, doubleNumberAsync }  = this.props
        return (
            <div className="text-center">
               <button onClick = { doubleNumberAsync } className="btn btn-danger">X2 async</button>
               <button onClick = { tripleNumber } className="btn btn-danger">X3</button>
            </div>
        )
    }
}


export default connect(state => state, dispatch => {
    return bindActionCreators(actionCreator, dispatch)
})(ControlTwo)
