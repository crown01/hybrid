
import _state from './state'

import {
    ADD_NEW_GOOD,
    INITIAL_CARS,
    REDUCE_GOOD
} from './const'

const reducer = (state = _state, action) => {
    let new_state = {...state}

    switch (action.type) {
        case INITIAL_CARS:
            new_state.cars = action.cars;
        break;
        case ADD_NEW_GOOD:
            new_state.cars = handler.addNewGood.bind(new_state.cars, action.goodInfo)()
        break;
        case REDUCE_GOOD:
            new_state.cars = handler.reduceGood.bind(new_state.cars, action.id)()
        break;

        default:break;
    }

    
    return new_state
}

export default reducer

const handler = {
    addNewGood (goodInfo) {//加入商品到购物车的方法
        let arr = this.slice()
        let isHas = arr.some(item => {
            if ( item.id === goodInfo.id ) {
                //如果有这个商品
                item.num += goodInfo.num
                return true
            }
            return false
        })

        if ( !isHas ) {//如果没有这个商品
            console.log(goodInfo)
            arr.push({
                ...goodInfo
            })
        }
        //同步数据库，真正项目里不用咱们做
        localStorage.cars = JSON.stringify(arr)
        return arr
    },
    reduceGood (id) {//减去商品
        let cars = this.filter(item => {
            if ( item.id === id ) {
                item.num --;
                if ( item.num <= 0 ) {
                    return false
                }
                return true
            }
            return true
        })
        //同步数据库，真正项目里不用咱们做
        localStorage.cars = JSON.stringify(cars)
        return cars
    }
}