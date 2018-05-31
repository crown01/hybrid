
import React, { Component } from 'react'

class GooodItem extends Component {
    render () {
        return (
           
            <div className="good-item">
                <div className="img-box">
                    <img 
                    width="100%"
                    src="https://mall.s.maizuo.com/77caa55a184ef4b9a61679af0d40e21b.jpg?x-oss-process=image/resize,m_fill,h_300,w_300" alt=""/>
                </div>
                <div className="name">实得分实得分该实得分实得分实得分实得分速度</div>

                <div className="content"><span className="price">￥68.00</span><span className="inventory">已售8253</span></div>
            </div>
           
        )
    }
}

export default GooodItem