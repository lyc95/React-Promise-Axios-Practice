import React, { Component } from 'react'
import { DatePicker,Button } from 'antd';
import { WechatOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

export default class App extends Component {

  onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  render() {
    return (
      <div>
        App...
          <Button type="primary">Primary Button</Button>
          <Button>Primary Button</Button>
          <WechatOutlined />
          <DatePicker onChange={this.onChange} />
      </div>
    )
  }
}

