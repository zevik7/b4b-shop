import React from 'react'
import { Table } from 'antd'

function TableManagement({ rowSelection, columns, data, onClickRow }) {
  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      onRow={(record, rowIndex) => {
        return {
          onClick: () => onClickRow(record),
        }
      }}
    />
  )
}

export default TableManagement
