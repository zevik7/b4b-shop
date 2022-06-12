import { useState } from 'react'
import { Space, Typography, Layout } from 'antd'
import './index.less'

import BicycleTrendingList from '../../components/BicycleTrendingList'
import { BicycleFooter, HomeNavigation } from '../../components'
import BrandList from './BrandList'
import AdsCarousel from './AdsCarousel'
import Banner from './Banner'

const { Title, Text } = Typography
const { Header, Content, Footer } = Layout

const Landing = () => {
  return (
    <>
      <Layout>
        <HomeNavigation />
        <Content>
          <div className="landing-page">
            <Banner />
            <div className="container">
              <AdsCarousel />
              <BicycleTrendingList />
              <BrandList />
            </div>
          </div>
        </Content>
        <BicycleFooter />
      </Layout>
    </>
  )
}

export default Landing
