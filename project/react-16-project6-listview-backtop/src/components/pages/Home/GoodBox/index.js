
import React, { Component } from 'react'
import './index.scss'

import GoodItem from '../../../commons/GoodItem'
import axios from 'axios'
class GoodBox extends Component {
    constructor (props) {
        super(props)

        this.state = {
            goods: []
        }
    }
    componentWillUnmount () {
        this.mounted = false
    }
    getGoods () {
        this.mounted = true
        axios.get ('/aura/api/recommend/home?page=1&num=20').then (({data}) => {
            console.log(data.data.list)
            if ( !this.mounted ) return false;
            this.setState({goods: data.data.list})
        })
    }
    componentWillMount () {
        this.getGoods()
    }
    renderItems () {
        let { goods } = this.state

        if ( !goods.length ) return '';

        return (<div className="good-content">
            {
                goods.map(item => {
                    return (<GoodItem data = { item }  key = {item.id} />)
                })
            }
        </div>)
    }
    render () {
        return (
            <div className = "good-box">
                <div className="title">—&nbsp;好货精选&nbsp;—</div>
                { this.renderItems() }
            </div>
        )
    }
}

export default GoodBox