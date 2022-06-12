import { useState } from 'react'
import BicycleCarousel from '../../components/BicycleCarousel'
import BicycleTrending from '../../components/BicycleTrending'
import BicycletCard from '../../components/BicycleCard'

const Landing = () => {
  return (
    <>
      <div className="carousel">
        <BicycleCarousel />
      </div>
      <div className="product-trending">
        {/* <BicycleTrending/> */}
        <div
          style={{
            maxWidth: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 64,
          }}
        >
          <BicycleTrending show={4}>
            <div>
              <div style={{ padding: 8 }}>
                <BicycletCard />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <BicycletCard />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <BicycletCard />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <BicycletCard />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <BicycletCard />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <BicycletCard />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <BicycletCard />
              </div>
            </div>
            <div>
              <div style={{ padding: 8 }}>
                <BicycletCard />
              </div>
            </div>
          </BicycleTrending>
        </div>
      </div>
    </>
  )
}

export default Landing
