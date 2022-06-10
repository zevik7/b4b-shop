import React from 'react'
import { Space, Table, Tag, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

function Index(props) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Color',
      dataIndex: 'color',
      key: 'color',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <>
          <Button type="default" shape="default" icon={<EditOutlined />} />
          <Button type="default" shape="default" icon={<EditOutlined />} />
          <Button type="primary" shape="default" icon={<DeleteOutlined />} />
        </>
      ),
    },
  ]
  const data = [
    {
      createdAt: 1654763016,
      name: 'name 1',
      description: 'description 1',
      price: 86,
      color: 'color 1',
      image: [],
      type: 'type 1',
      rating: 1,
      id: '1',
    },
    {
      createdAt: 1654762956,
      name: 'name 2',
      description: 'description 2',
      price: 99,
      color: 'color 2',
      image: [],
      type: 'type 2',
      rating: 5,
      id: '2',
    },
  ]

  return <Table columns={columns} dataSource={data} />
}

export default Index
