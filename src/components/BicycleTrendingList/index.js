import { useEffect, useState, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { bicyclesSelector } from '../../redux/selectors'
import { fetchBicycles } from '../../redux/slices'
import BicycletCard from '../BicycleCard'
import BicycleTrending from '../BicycleTrending'

const BicycleTrendingList = () => {
  const dispatch = useDispatch()
  const bicycles = useSelector(bicyclesSelector)
  const [show, setShow] = useState(4)

  useEffect(() => {
    dispatch(fetchBicycles())
  }, [dispatch])

  const setSize = () => {
    if (window.innerWidth >= 992) {
      setShow(4)
    } else if (window.innerWidth >= 768 && window.innerWidth <= 992) {
      setShow(3)
    } else if (window.innerWidth >= 600 && window.innerWidth <= 768) {
      setShow(2)
    } else if (window.innerWidth < 600) {
      setShow(1)
    } else return
  }

  useLayoutEffect(() => {
    window.addEventListener('resize', setSize)

    return () => window.removeEventListener('resize', setSize)
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
        <BicycleTrending show={show}>
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
