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

const BicyclePagination = (props) => (
  <Pagination
    total={props.total}
    pageSize={props.pageSize}
    current={props.current}
    itemRender={itemRender}
    className="product-pagination"
    onChange={props.onChange}
  />
)

export default BicyclePagination
