import { createSelector } from 'reselect'

export const bicyclesSelector = (state) => state.bicycles

export const bicycleSelectedSelector = (state) => state.bicycles.selected

export const bicycleDataSelector = (state) => state.bicycles.data

export const bicycleStatusSelector = (state) => state.bicycles.status

export const filterPriceSelector = (state) => state.shopFilter.price
export const filterTypeSelector = (state) => state.shopFilter.type
export const filterColorSelector = (state) => state.shopFilter.color
export const filterGenderSelector = (state) => state.shopFilter.gender
export const filterBrandSelector = (state) => state.shopFilter.brand
export const filterMaterialSelector = (state) => state.shopFilter.material

export const bicyclesRemainingSelector = createSelector(
  bicyclesSelector,
  bicycleStatusSelector,
  filterPriceSelector,
  filterTypeSelector,
  filterColorSelector,
  filterGenderSelector,
  filterBrandSelector,
  filterMaterialSelector,
  searchSelector,
  (bicycles, status, price, type, color, gender, brand, material, search) => {
    const data = bicycles.data
      .filter((item) => {
        return type.length ? type.includes(item.type) : true
      })
      .filter((item) => {
        return color.length ? color.includes(item.color) : true
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
    return {
      status,
      data,
    }
  }
)

export const searchSelector = (state) => state.search.value
