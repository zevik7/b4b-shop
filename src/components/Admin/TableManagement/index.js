import React from 'react'
import { Table } from 'antd'

function TableManagement({ rowSelection, columns, data }) {
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      expandable={{
        expandedRowRender: (record) => 'abc',
      }}
    />
  )
}

export default TableManagement
