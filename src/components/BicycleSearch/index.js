import React from 'react'
import './index.less'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Row, Col } from 'antd';

const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

const BicycleSearch = () => {
  return (
    <Space direction="vertical">
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      className="product-search"
    />

     </Space>
    
  )
}

export default BicycleSearch