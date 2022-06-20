import { Space, Typography, Layout } from 'antd'
import { motion } from 'framer-motion'
import './style.less'

import ebike from '../../../assets/images/ebike-icon.svg'
import mountbike from '../../../assets/images/mtb-icon.svg'
import roadbike from '../../../assets/images/road-icon.svg'
import gravbike from '../../../assets/images/gravel-icon.svg'
import kidbike from '../../../assets/images/kids-icon.svg'
import { useTranslation } from 'react-i18next'

const { Title, Text } = Typography

const Banner = () => {
  const { t } = useTranslation()
  return (
    <div className="banner">
      <div className="banner-img">
        <div className="banner-title">
          <Title>WHERE THE WORLD RIDES</Title>
        </div>
      </div>
      <div className="banner-bicycle-type">
        <Title level={2}>{t('home-page.categories.title')}</Title>
        <div className="list-type-ctn">
          <section>
            <img src={ebike} alt="ebike" />
            <Text>{t('home-page.categories.item.electric-bike')}</Text>
          </section>
          <section>
            <img src={mountbike} alt="ebike" />
            <Text>{t('home-page.categories.item.mountain-bike')}</Text>
          </section>
          <section>
            <img src={kidbike} alt="ebike" />
            <Text>{t('home-page.categories.item.kid-bike')}</Text>
          </section>
          <section>
            <img src={roadbike} alt="ebike" />
            <Text>{t('home-page.categories.item.road-bike')}</Text>
          </section>
          <section>
            <img src={gravbike} alt="ebike" />
            <Text>{t('home-page.categories.item.gravel-bike')}</Text>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Banner
