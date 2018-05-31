
import React, { Component } from 'react'

import GroupBuycar from '../../../modules/group-buycar'

class Info extends Component {
    getAllInfo () {//获取总价钱和总数量
        let { cars } = this.props
        let allInfo = { allNum: 0, allPrice: 0 }
        if ( !cars.length ) return allInfo;
        cars.forEach(good => {
            allInfo.allNum += good.num
            allInfo.allPrice += good.num * good.price
        });
        return allInfo
    }
    render () {
        let allInfo = this.getAllInfo()
        return (
            <div className = "">
                总价钱：{allInfo.allPrice}；总数量：{allInfo.allNum}
            </div>
        )
    }
}

export default GroupBuycar(Info)