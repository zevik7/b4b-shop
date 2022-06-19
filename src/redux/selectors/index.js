import { createSelector } from 'reselect'

// Bicycle
export const bicyclesSelector = (state) => state.bicycles
export const bicycleSelectedSelector = (state) => state.bicycles.selected
export const bicycleDataSelector = (state) => state.bicycles.data
export const bicycleStatusSelector = (state) => state.bicycles.status

// Filter
export const filterPriceSelector = (state) => state.shopFilter.price
export const filterTypeSelector = (state) => state.shopFilter.type
export const filterGenderSelector = (state) => state.shopFilter.gender
export const filterBrandSelector = (state) => state.shopFilter.brand
export const filterMaterialSelector = (state) => state.shopFilter.material
export const filterOrderPriceSelector = (state) => state.shopFilter.orderPrice

// Search
export const searchSelector = (state) => state.search.value

export const bicyclesRemainingSelector = createSelector(
  bicyclesSelector,
  bicycleStatusSelector,
  filterPriceSelector,
  filterTypeSelector,
  filterGenderSelector,
  filterBrandSelector,
  filterMaterialSelector,
  filterOrderPriceSelector,
  searchSelector,
  (
    bicycles,
    status,
    price,
    type,
    gender,
    brand,
    material,
    orderPrice,
    search
  ) => {
    if (bicycles.data.length === 0)
      return {
        status,
        data: [],
      }

    const data = bicycles.data
      .filter((item) => {
        if (item.price >= price[0] && item.price <= price[1]) {
          return true
        } else return false
      })
      .filter((item) => {
        return type.length ? type.includes(item.type) : true
      })
      .filter((item) => {
        return gender.length ? gender.includes(item.gender) : true
      })
      .filter((item) => {
        return brand.length ? brand.includes(item.brand) : true
      })
      .filter((item) => {
        return material.length ? material.includes(item.material) : true
      })
      .filter((item) => {
        if (search === '') return true
        return item.name.toLowerCase().includes(search.toLowerCase()) // Need optimize performance?
      })
      .sort((a, b) => {
        if (orderPrice === 'default') return 0
        if (orderPrice === 'asc') return a.price - b.price
        if (orderPrice === 'desc') return b.price - a.price
      })

    return {
      status,
      data,
    }
  }
)
