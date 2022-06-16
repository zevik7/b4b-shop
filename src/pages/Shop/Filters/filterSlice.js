import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  price: [],
  type: [],
  color: [],
  gender: [],
  brand: [],
  material: [],
}

export default createSlice({
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
  },
})
