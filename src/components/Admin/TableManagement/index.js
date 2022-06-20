import React from 'react'
import { Table } from 'antd'

function TableManagement({ rowSelection, columns, data, onClickRow, loading }) {
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      loading={loading}
    />
  )
}

export default TableManagement
