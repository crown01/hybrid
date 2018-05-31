
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class GooodItem extends Component {
    render () {

        let { data } = this.props
        let { goods_id, goods_pic, goods_name, goods_price, manu_name } = data

        goods_pic = goods_pic.replace('80x60','400x400')

        return (
           
            <div className="good-item">
                <Link to={{
                        pathname:"/detail/"+goods_id,
                        search: '?price='+goods_price
                    }}>
                    <div className="img-box">
                        <img 
                        width="100%"
                        src={goods_pic} alt=""/>
                    </div>
                    <div className="name">{goods_name}</div>

                    <div className="content"><span className="price">￥{goods_price}</span><span className="inventory">{ manu_name }</span></div>
                </Link>
                
            </div>
           
        )
    }
}

export default GooodItem