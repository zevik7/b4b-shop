import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  price: [100, 10000],
  type: [],
  gender: [],
  brand: [],
  material: [],
  order: {
    name: 'new',
    value: 'asc',
  },
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
    colorChange: (state, action) => {
      state.color = action.payload
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
      state.order = action.payload
    },
  },
})

export const {
  priceChange,
  typeChange,
  colorChange,
  genderChange,
  brandChange,
  materialChange,
  orderChange,
} = filterSlice.actions

export default filterSlice
