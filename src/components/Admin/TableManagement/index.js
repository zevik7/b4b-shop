import { Table } from 'antd'
import React from 'react'

function TableManagement({ rowSelection, columns, data, onClickRow, loading }) {
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      loading={loading}
      scroll={{
        x: 'max-content',
      }}
    />
  )
}

export default TableManagement
