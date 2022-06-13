import React from 'react'
import { Table } from 'antd'

function BicycleList(props) {
  const { rowSelection, columns, data } = props
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  )
}

export default BicycleList
