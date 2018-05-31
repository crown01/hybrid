
import React, { Component } from 'react'

class GooodItem extends Component {
    render () {

        let { data } = this.props
        let { masterName, displaySalesCount, skuList } = data
        return (
           
            <div className="good-item">
                <div className="img-box">
                    <img 
                    width="100%"
                    src={skuList[0].image} alt=""/>
                </div>
                <div className="name">{masterName}</div>

                <div className="content"><span className="price">￥{(skuList[0].price/100).toFixed(2)}</span><span className="inventory">已售{displaySalesCount}</span></div>
            </div>
           
        )
    }
}

export default GooodItem