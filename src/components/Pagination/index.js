import { Pagination } from 'antd'
import React from 'react'

const CustomPagination = (props) => {
  const { total, pageSize, current, onChange } = props

  return (
    <Pagination
      current={current}
      onChange={onChange}
      total={total}
      pageSize={pageSize}
    />
  )
}

export default CustomPagination
