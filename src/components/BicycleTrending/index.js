import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Typography } from 'antd'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './index.less'

const { Title } = Typography

const BicycleTrending = (props) => {
  const { children, show } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  const [touchPosition, setTouchPosition] = useState(null)

  const { t } = useTranslation()

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      next()
    }

    if (diff < -5) {
      prev()
    }

    setTouchPosition(null)
  }

  return (
    <div className="trending">
      <Title level={2}>{t('home-page.trending')}</Title>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {currentIndex > 0 && (
            <Button
              onClick={prev}
              className="left-arrow"
              shape="circle"
              icon={<LeftOutlined />}
            />
          )}
          <div
            className="carousel-content-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div
              className={`carousel-content show-${show}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
              }}
            >
              {children}
            </div>
          </div>

          {currentIndex < length - show && (
            <Button
              onClick={next}
              className="right-arrow"
              shape="circle"
              icon={<RightOutlined />}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default BicycleTrending
