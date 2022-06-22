import {
  AndroidOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  GoogleOutlined,
} from '@ant-design/icons'
import { Input, Space, Button, Tooltip, Typography } from 'antd'
import { Layout } from 'antd'
import Logo from '../Logo'
import {} from 'antd'
import React from 'react'
import './index.less'

const { Footer } = Layout
const { Title } = Typography
const { Search } = Input
const suffix = (
  <MailOutlined
    style={{
      fontSize: 16,
      color: '#b3b3b3',
    }}
  />
)

const onSearch = (value) => console.log(value)

const HomeFooter = () => {
  return (
    <Footer className="footer">
      <section className="container">
        <div className="item-1">
          <li className="footer-title">
            <a className="logo-img">
              <Logo />
            </a>
          </li>
          <li className="shop-info">
            B4B-Shop is the one-stop shop for everything you need when buying
            your new bike. We are the US distributor and retailer for the global
            brands
          </li>
        </div>
        <div className="item-2">
          <li className="footer-title">Shop By</li>
          <li>
            <a>Your Orders</a>
          </li>
          <li>
            <a>Payment</a>
          </li>
          <li>
            <a>Delivery</a>
          </li>
          <li>
            <a>Conditions</a>
          </li>
        </div>
        <div className="item-3">
          <li className="footer-title">Products</li>
          <li>
            <a>New product</a>
          </li>
          <li>
            <a>Best sales</a>
          </li>
          <li>
            <a>Prices drop</a>
          </li>
          <li>
            <a>Stores</a>
          </li>
        </div>
        <div className="item-4">
          <li className="footer-title">Our Company</li>
          <li>
            <a>About us</a>
          </li>
          <li>
            <a>Contact us</a>
          </li>
          <li>
            <a>Site map</a>
          </li>
          <li>
            <a>Help & Service</a>
          </li>
        </div>
        <div className="item-5">
          <li className="footer-title">Contact</li>
          <li>
            <a>
              <EnvironmentOutlined /> Victoria Resort, Can Tho City
            </a>
          </li>
          <li>
            <a>
              {' '}
              <MailOutlined /> B4B@gmail.com
            </a>
          </li>
          <li>
            <a>
              {' '}
              <WhatsAppOutlined /> +84987654321
            </a>
          </li>
          <li className="contact-footer">
            <a>
              <Button
                type="default"
                shape="circle"
                icon={<FacebookOutlined />}
              />
            </a>
            <a>
              <Button
                type="default"
                shape="circle"
                icon={<TwitterOutlined />}
              />
            </a>
            <a>
              <Button
                type="default"
                shape="circle"
                icon={<InstagramOutlined />}
              />
            </a>
            <a>
              <Button type="default" shape="circle" icon={<GoogleOutlined />} />
            </a>
          </li>
        </div>
        <div className="item-6">
          <div className="search-footer">
            <Search
              placeholder="Enter your email"
              enterButton="Subscribe"
              size="large"
              suffix={suffix}
              onSearch={onSearch}
              className="search-input-footer"
            />
          </div>
        </div>
      </section>
      <div className="subfooter">
        Copyright © 2022 B4B.com | All rights reserved
      </div>
    </Footer>
  )
}

export default HomeFooter
