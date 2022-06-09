import React from 'react'
import { Carousel, Image } from 'antd'

import './style.less'

const defaultImgStyle = {
  width: '100%',
  background: 'white',
}

const ImgCarousel = (props) => {
  const { imgs, imgStyle, ...others } = props

  console.log({ ...defaultImgStyle, ...imgStyle })
  return (
    <>
      <Carousel autoplay className="carousel" {...others}>
        {imgs.map((img) => (
          <Image
            key={img}
            style={{ ...defaultImgStyle, ...imgStyle }}
            src={img}
          />
        ))}
      </Carousel>
    </>
  )
}

export default ImgCarousel
