import {
  EnvironmentOutlined,
  FacebookOutlined,
  GoogleOutlined,
  InstagramOutlined,
  MailOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons'
import { Button, Input } from 'antd'
import { Layout } from 'antd'
import 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

import Logo from '../Logo'
import './index.less'

const { Footer } = Layout
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
    <Footer className="footer">
      <section className="container">
        <div className="item-1">
          <Logo />
          <p className="shop-info">{t('footer.title')}</p>
        </div>
        <div className="item-2">
          <p className="footer-title">{t('footer.shop-by.title')}</p>
          <p>{t('footer.shop-by.item.your-order')}</p>
          <p>{t('footer.shop-by.item.payment')}</p>
          <p>{t('footer.shop-by.item.delivery')}</p>
          <p>{t('footer.shop-by.item.condition')}</p>
        </div>
        <div className="item-3">
          <p className="footer-title">{t('footer.product.title')}</p>
          <p>{t('footer.product.item.new-product')}</p>
          <p>{t('footer.product.item.best-sale')}</p>
          <p>{t('footer.product.item.price-drop')}</p>
          <p>{t('footer.product.item.store')}</p>
        </div>
        <div className="item-4">
          <p className="footer-title">{t('footer.our-company.title')}</p>
          <p>{t('footer.our-company.item.about-us')}</p>
          <p>{t('footer.our-company.item.contact-us')}</p>
          <p>{t('footer.our-company.item.site-map')}</p>
          <p>{t('footer.our-company.item.help-service')}</p>
        </div>
        <div className="item-5">
          <p className="footer-title">{t('footer.contact.title')}</p>
          <p>
            <EnvironmentOutlined />
            {t('footer.contact.item.location')}
          </p>
          <p>
            {' '}
            <MailOutlined /> B4B@gmail.com
          </p>
          <p>
            {' '}
            <WhatsAppOutlined /> +84987654321
          </p>
          <p className="contact-footer">
            <Button type="default" shape="circle" icon={<FacebookOutlined />} />

            <Button type="default" shape="circle" icon={<TwitterOutlined />} />

            <Button
              type="default"
              shape="circle"
              icon={<InstagramOutlined />}
            />

            <Button type="default" shape="circle" icon={<GoogleOutlined />} />
          </p>
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
    </Footer>
  )
}

export default HomeFooter
