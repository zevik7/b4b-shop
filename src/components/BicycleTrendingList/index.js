import { useState, useEffect } from 'react'
import BicycleTrending from '../BicycleTrending'
import BicycletCard from '../BicycleCard'
import { useDispatch, useSelector } from 'react-redux'
import { bicyclesSelector } from '../../redux/selectors'
import { fetchBicycles } from '../../redux/slices'

const BicycleTrendingList = () => {
  const dispatch = useDispatch()
  const bicycles = useSelector(bicyclesSelector)

  useEffect(() => {
    dispatch(fetchBicycles())
  }, [])
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
          {bicycles.status === 'loading' ? (
            <h1>Loading</h1>
          ) : (
            bicycles.data.map((bicycle, key) => (
              <div key={key}>
                <div style={{ padding: 8 }}>
                  <BicycletCard
                    id={bicycle.id}
                    img={bicycle.images[0]}
                    title={bicycle.name}
                    price={bicycle.price}
                    brand={bicycle.brand}
                  />
                </div>
              </div>
            ))
          )}
        </BicycleTrending>
      </div>
    </div>
  )
}

export default BicycleTrendingList
