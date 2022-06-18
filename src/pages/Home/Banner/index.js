import { Space, Typography, Layout } from 'antd'
import { motion } from 'framer-motion'
import './style.less'

import ebike from '../../../assets/images/ebike-icon.svg'
import mountbike from '../../../assets/images/mtb-icon.svg'
import roadbike from '../../../assets/images/road-icon.svg'
import gravbike from '../../../assets/images/gravel-icon.svg'
import kidbike from '../../../assets/images/kids-icon.svg'

const { Title, Text } = Typography

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-img">
        <div className="banner-title">
          <Title>WHERE THE WORLD RIDES</Title>
        </div>
      </div>
      <div className="banner-bicycle-type">
        <Title level={2}>POPULAR CATEGORIES</Title>
        <div className="list-type-ctn">
          <section>
            <img src={ebike} alt="ebike" />
            <Text>Electric Bikes</Text>
          </section>
          <section>
            <img src={mountbike} alt="ebike" />
            <Text>Mountain Bikes</Text>
          </section>
          <section>
            <img src={kidbike} alt="ebike" />
            <Text>Kid Bikes</Text>
          </section>
          <section>
            <img src={roadbike} alt="ebike" />
            <Text>Road Bikes</Text>
          </section>
          <section>
            <img src={gravbike} alt="ebike" />
            <Text>Gravel Bikes</Text>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Banner
