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
import Logo from '../Logo'
import {} from 'antd'
import React from 'react'
import './index.less'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  return (
    <div className="footer">
      <section className="container">
        <div className="item-1">
          <li className="footer-title">
            {/* <a>B4B-Shop</a> */}
            <a className="logo-img">
              <Logo />
            </a>
          </li>
          <li className="shop-info">{t('footer.title')}</li>
        </div>
        <div className="item-2">
          <li className="footer-title">{t('footer.shop-by.title')}</li>
          <li>
            <a>{t('footer.shop-by.item.your-order')}</a>
          </li>
          <li>
            <a>{t('footer.shop-by.item.payment')}</a>
          </li>
          <li>
            <a>{t('footer.shop-by.item.delivery')}</a>
          </li>
          <li>
            <a>{t('footer.shop-by.item.condition')}</a>
          </li>
        </div>
        <div className="item-3">
          <li className="footer-title">{t('footer.product.title')}</li>
          <li>
            <a>{t('footer.product.item.new-product')}</a>
          </li>
          <li>
            <a>{t('footer.product.item.best-sale')}</a>
          </li>
          <li>
            <a>{t('footer.product.item.price-drop')}</a>
          </li>
          <li>
            <a>{t('footer.product.item.store')}</a>
          </li>
        </div>
        <div className="item-4">
          <li className="footer-title">{t('footer.our-company.title')}</li>
          <li>
            <a>{t('footer.our-company.item.about-us')}</a>
          </li>
          <li>
            <a>{t('footer.our-company.item.contact-us')}</a>
          </li>
          <li>
            <a>{t('footer.our-company.item.site-map')}</a>
          </li>
          <li>
            <a>{t('footer.our-company.item.help-service')}</a>
          </li>
        </div>
        <div className="item-5">
          <li className="footer-title">{t('footer.contact.title')}</li>
          <li>
            <a>
              <EnvironmentOutlined />
              {t('footer.contact.item.location')}
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
              placeholder={t('cta.place_holder_input-email')}
              enterButton={t('cta.subscribe')}
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
    </div>
  )
}

export default HomeFooter
