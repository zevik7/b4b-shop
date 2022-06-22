import Background1 from '../../../assets/images/ads-carousel1.avif'
import Background2 from '../../../assets/images/ads-carousel2.avif'
import Background3 from '../../../assets/images/ads-carousel3.avif'
import Background4 from '../../../assets/images/ads-carousel4.avif'
import { ImgCarousel } from '../../../components'
import './style.less'

const images = [
  {
    original: Background1,
    originalTitle: 'Discover the World with your Bike and Family.',
  },
  {
    original: Background2,
    originalTitle: 'MTB Trail & All-Mountain',
  },
  {
    original: Background3,
    originalTitle:
      'Thule - Functional Bike Racks & Bike Trailers for Sports & Leisure',
  },
  {
    original: Background4,
    originalTitle:
      'Bike Racks, Bike Trailers, Child Bike Seats, Bike Travel Cases & Bags for Your Cycling Holiday',
  },
]

const AdsCarousel = () => {
  return (
    <ImgCarousel
      images={images}
      showThumbnails={false}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  )
}

export default AdsCarousel
