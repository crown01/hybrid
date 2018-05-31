
import React , { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreator from '../../../store/number/actionCreator'


class Control extends Component {
    render () {
        let { controlNumber } = this.props
        return (
            <div className="text-center">
                <button  onClick = {controlNumber.bind(this, false)} className="btn btn-success">-</button>
                <button onClick = {controlNumber.bind(this, true)} className="btn btn-success">+</button>
            </div>
        )
    }
}
//作用是将一些能使用到store.dispatch的方法传递给UI组件的属性上
// let mapDispatchToProps = dispatch => {
//     return {
//         controlNumber (isAdd) {
//             dispatch({type: 'CONTROL_NUMBER', isAdd})
//         }
//     }
// }
let mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreator, dispatch)
}


export default connect(state => state, mapDispatchToProps)(Control)
