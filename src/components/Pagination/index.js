import React from 'react'
import { Pagination } from 'antd'

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>
  }

  if (type === 'next') {
    return <a>Next</a>
  }

  return originalElement
}

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
