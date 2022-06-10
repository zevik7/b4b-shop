import ImageGallery from 'react-image-gallery'

import './style.less'

const ImgCarousel = (props) => {
  const { images, ...others } = props
  return <ImageGallery items={images} autoPlay={true} {...others} />
}

export default ImgCarousel
