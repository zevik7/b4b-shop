import { useState } from 'react'
import BicycleTrending from '../BicycleTrending'
import BicycletCard from '../BicycleCard'

const BicycleTrendingList = () => {
  return (
    <div className="mutli-trending">
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
  )
}

export default BicycleTrendingList
