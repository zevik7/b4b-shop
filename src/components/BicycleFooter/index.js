import { AndroidOutlined, MailOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, WhatsAppOutlined  } from '@ant-design/icons';
import { Input, Space, Button, Tooltip} from 'antd';
import {} from 'antd';
import React from 'react'
import './index.less'

const { Search } = Input;
const suffix = (
  <MailOutlined 
    style={{
      fontSize: 16,
      color: '#b3b3b3',
    }}
  />
);

const onSearch = (value) => console.log(value);

const BicycleFooter = () => {
  return (
<div className="footer">
<section className="container">
  <div className="item-a">
    <li className="footer-title"><a>B4B-Shop</a></li>
    {/* <img alt="logo" src="../../assets/images/logo.png"/> */}
    <li className="shop-info">Create, distribute, and monetize your podcast all for free</li>
  </div>
  <div className="item-b">
    <li className="footer-title">Service</li>
    <li><a>About us</a></li>
    <li><a>Contact Us</a></li>
    <li><a>Features</a></li>
    <li><a></a></li>
  </div>
  <div className="item-c">
    <li className="footer-title">Resources</li>
    <li><a>Apps</a></li>
    <li><a>Developer</a></li>
    <li><a>Integration</a></li>
    <li><a>Pricing</a></li>
  </div>
  <div className="item-d">
    <li className="footer-title">Contact</li>
    <li><a> <MailOutlined /> B4B@gmail.com</a></li>
    <li><a> <WhatsAppOutlined /> +84987654321</a></li>
    <li className="contact-footer">
      <a><Button type="primary" shape="circle" icon={<FacebookOutlined />} /></a>
      <a><Button type="primary" shape="circle" icon={<TwitterOutlined />} /></a>
      <a><Button type="primary" shape="circle" icon={<InstagramOutlined />} /></a>
    </li>
    <li><span className="search-footer">
    <Search
          placeholder="Enter your email"
          enterButton="Subscribe"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
          className="search-input-footer"
        />
    </span></li>
  </div>

</section>
<div className="subfooter">© 2022 B4B.com | All rights reserved</div>
</div>
  )
}

export default BicycleFooter
