import qs from 'querystring'

import React, { Component } from 'react'
import { List, Stepper, Button } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import GroupBuycar from '../../../../modules/group-buycar'


class Info extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        num: 1
      };
    }
    onChange = (val) => {
      this.setState({ num: val });
    }

    componentWillMount () {
        this.id = this.props.match.params.id
        this.goodname = '商品-'+this.id
        let search = this.props.location.search.replace('?','')
        this.price = qs.parse(search).price
    }

    render() {
        let { price, id, goodname: name } = this
        let { num } = this.state
      return (
        <div>
            <List>
                <List.Item
                    wrap
                    extra={
                    <Stepper
                        style={{ width: '100%', minWidth: '100px' }}
                        showNumber
                        min={1}
                        value={this.state.num}
                        onChange={this.onChange}
                    />}
                >
                请选择数量
                </List.Item>

            </List>
            <Button onClick = {this.props.addGoodInCar.bind(this, {
                id, name, price, num
            })} type="warning">加入购物车</Button>
        </div>
      );
    }
  }

export default withRouter(GroupBuycar(Info))