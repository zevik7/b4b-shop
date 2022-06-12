import { useState } from 'react'
import BicycleCarousel from '../../components/BicycleCarousel'
import BicycleTrendingList from '../../components/BicycleTrendingList'

const Landing = () => {
  return (
    <>
      <div className="carousel-slide">
        <BicycleCarousel />
      </div>
      <div className="product-trending">
        <BicycleTrendingList />
      </div>
    </>
  )
}

export default Landing
