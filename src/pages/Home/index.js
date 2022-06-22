import { Layout, Space, Typography } from 'antd'
import { useState } from 'react'

import { HomeFooter, HomeNavigation } from '../../components'
import BicycleTrendingList from '../../components/BicycleTrendingList'
import AdsCarousel from './AdsCarousel'
import Banner from './Banner'
import BrandList from './BrandList'
import Features from './Features'
import './index.less'

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
              <Features />
            </div>
          </div>
        </Content>
        <HomeFooter />
      </Layout>
    </>
  )
}

export default Landing
