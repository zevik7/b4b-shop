import React from 'react';
import './index.less';
import { Row, Col } from 'antd';
import BicycleGrid from '../../components/BicycleGrid';
import BicycleSearch from '../../components/BicycleSearch';
import BicyclePagination from '../../components/BicyclePagination';

const Home = () => {
  return (
    <div className='homepage-product'>
    <h1>Catalog</h1>
    <Col>
      <Row className='product-search'><BicycleSearch/></Row>
      <Row className='product-grid'><BicycleGrid/></Row>
      <Row className='product-pagination'><BicyclePagination/></Row>
    </Col>
    </div>
  )
}

export default Home
