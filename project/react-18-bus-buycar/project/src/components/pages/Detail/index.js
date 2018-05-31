
import React, { Component } from 'react'
import './index.scss'
import { NavBar, Icon  } from 'antd-mobile'
import axios from 'axios'
import GroupBuycar from '../../../modules/group-buycar'
import Info from './Info'
import Banner from '../../commons/Banner'

class Detail extends Component {
    constructor (props) {
        
        super(props)
        this.state = {
            info: []
        }
        this.back = this.back.bind(this)
    }
    back () {
        this.props.history.goBack()
    }
    getDetailById () {
        axios.get('/json/detail.json',{
            params: { id: this.props.match.params.id }
        }).then (({data}) => {
            this.setState({info: data})
        })
    }
    componentWillMount () {
        this.getDetailById()
    }
    render () {
        console.log(this.props)
        return (
            <div className = "detail">
                <NavBar
                    mode="dark"
                    icon={<Icon onClick = {this.back} type="left" />}
                >详情</NavBar>
               <Banner banners = { this.state.info.goods_pics } />

               <h4>{this.state.info.goods_name}</h4>

               <Info/>

               { JSON.stringify(this.props.cars) }
            </div>
        )
    }
}

export default GroupBuycar(Detail)