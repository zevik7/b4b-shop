import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  price: [0, 10000],
  type: [],
  gender: [],
  brand: [],
  material: [],
  orderPrice: 'none',
}

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    priceChange: (state, action) => {
      state.price = action.payload
    },
    typeChange: (state, action) => {
      state.type = action.payload
    },
    genderChange: (state, action) => {
      state.gender = action.payload
    },
    brandChange: (state, action) => {
      state.brand = action.payload
    },
    materialChange: (state, action) => {
      state.material = action.payload
    },
    orderPriceChange: (state, action) => {
      state.orderPrice = action.payload
    },
  },
})

export const {
  priceChange,
  typeChange,
  genderChange,
  brandChange,
  materialChange,
  orderPriceChange,
} = filterSlice.actions

export default filterSlice
