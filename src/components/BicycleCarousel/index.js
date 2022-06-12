import React from 'react'
import './index.less'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import Background1 from '../../assets/images/carousel-img1.jpg'
import Background2 from '../../assets/images/carousel-img2.jpg'
import Background3 from '../../assets/images/carousel-img3.jpg'
import Background4 from '../../assets/images/carousel-img4.jpg'
const BicycleCarousel = () => {
  return (
    <Carousel className="carousel-img">
      <Carousel.Item>
        <img className="d-block w-100" src={Background1} alt="First slide" />
        <Carousel.Caption>
          <p>Discover the World with your Bike and Family.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Background2} alt="Second slide" />

        <Carousel.Caption>
          <p>MTB Trail & All-Mountain</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Background3} alt="Third slide" />

        <Carousel.Caption>
          <p>
            Thule - Functional Bike Racks & Bike Trailers for Sports & Leisure
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Background4} alt="Third slide" />

        <Carousel.Caption>
          <p>
            Bike Racks, Bike Trailers, Child Bike Seats, Bike Travel Cases &
            Bags for Your Cycling Holiday
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BicycleCarousel
