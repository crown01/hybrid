
import {
    ADD_NEW_GOOD,
    INITIAL_CARS,
    REDUCE_GOOD
} from './const'

const actionCreator = {
    //初始化购物车数据
    initialCars () {
        return dispatch => {
            setTimeout(() => {
                
                var cars = localStorage.cars?JSON.parse(localStorage.cars) : []

                dispatch({
                    type: INITIAL_CARS,
                    cars
                })
            },500)
        }
    },
   addGoodInCar (goodInfo) {
       return dispatch => {
           //在这里应该发送ajax请求到后端，后端对用户数据库的购物车操作之后吗才能对store中的购物车做出同步
           setTimeout(() => {
               //假设，已经发送成功，现在需要同步store里的数据

               dispatch({
                    type: ADD_NEW_GOOD,
                    goodInfo
               })

           }, 500);
       }
   },
   reduceGoodInCar (id) {
       return dispatch => {
           setTimeout(() => {
               dispatch({
                   type: REDUCE_GOOD,
                   id
               })
           }, 500);
       }
   }
}
export default actionCreator