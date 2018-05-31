
import React, { Component } from 'react'
import './index.scss'
import Info from './Info'
import { List, Stepper, Button } from 'antd-mobile';
import GroupBuycar from '../../../modules/group-buycar'


const GoodItem = props => {
    let { data, addGoodInCar, reduceGoodInCar } = props
    let { name, price, num, id } = data
    let onChange = (val) => {
        if ( val - num > 0 ) {//点击+的按钮
            addGoodInCar({id, price, name, num: 1})
        }else {
            reduceGoodInCar(id)
        }
    }
    return (
        <List>
            <List.Item
                wrap
                extra={
                <Stepper
                    style={{ width: '100%', minWidth: '100px' }}
                    showNumber
                    value={num}
                    onChange={onChange}
                />}
            >
            {name} ￥{price}
            </List.Item>

        </List>
    )
}


class Car extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }
    renderItems () {//循环每一个商品
        let { addGoodInCar, reduceGoodInCar } = this.props
        let { cars } = this.props
        if ( !cars.length ) return ''
        return cars.map(item => {
            return <GoodItem 
            addGoodInCar = { addGoodInCar }
            reduceGoodInCar = {reduceGoodInCar}
            data = {item} key = { item.id } />
        })
    }
    render() {
        let { cars } = this.props
        return (
            <div>
                {
                    !cars.length ? <p style={{textAlign: 'center'}}>购物车空空如也，快去买吧</p> : (
                        <div>
                            { this.renderItems() }
                            <Info/>
                        </div>
                    )
                }
                
            </div>
        );
    }
}

export default GroupBuycar(Car)

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


// B(baidu) A(alibaba) T(tencent) J(JD)
// T(今日头条) M(美团) D(滴滴)