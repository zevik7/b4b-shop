import { createSelector } from 'reselect'

export const bicyclesSelector = (state) => state.shop.bicycles

export const bicycleStatusSelector = (state) => state.shop.bicycles.status

export const filterPriceSelector = (state) => state.shopFilter.price

export const filterTypeSelector = (state) => state.shopFilter.type

export const filterColorSelector = (state) => state.shopFilter.color

export const filterGenderSelector = (state) => state.shopFilter.gender

export const filterBrandSelector = (state) => state.shopFilter.brand

export const filterMaterialSelector = (state) => state.shopFilter.material

export const bicyclesRemainingSelector = createSelector(
  bicyclesSelector,
  bicycleStatusSelector,
  filterTypeSelector,
  filterColorSelector,
  filterGenderSelector,
  filterBrandSelector,
  filterMaterialSelector,
  (bicycles, status, type, color, gender, brand, material) => {
    console.log(type)
    const data = bicycles.data.filter((item) => {
      return type.length ? type.includes(item.type) : true
    })
    return {
      status,
      data,
    }
  }
)
