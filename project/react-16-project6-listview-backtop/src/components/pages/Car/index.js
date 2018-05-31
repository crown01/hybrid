
import React, { Component } from 'react'
import './index.scss'



class Car extends Component {
    render () {
        console.log(this)
        return (
            <div className = "car page">
             Car
            
            </div>
        )
    }
}

export default Car

//高阶组件
// const Hoc = (Comp) => {
//     return class HocComponent extends Component {
//         alertRandomNumber () {
//             let num = Math.ceil(Math.random()*10)
//             alert(num)
//         }
//         render () {
//             return (
//                 <Comp alertRandomNumber = {this.alertRandomNumber}/>
//             )
//         }
//     }
// }

// class A extends Component {
//     render () {
//         return (
//             <button onClick = {this.props.alertRandomNumber}>click</button>
//         )
//     }
// }
// class B extends Component {
   
//     render () {
//         return (
//             <button onDoubleClick = {this.props.alertRandomNumber}>click</button>
//         )
//     }
// }

// const Ha = Hoc(A)
// const Hb = Hoc(B)