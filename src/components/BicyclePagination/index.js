import React from 'react';
import { Pagination } from 'antd';

const itemRender = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }

  if (type === 'next') {
    return <a>Next</a>;
  }

  return originalElement;
};

const BicyclePagination = () => <Pagination total={500} itemRender={itemRender} className="product-pagination" />;

export default BicyclePagination;