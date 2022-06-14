import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBicycles } from '../../api'

const initialState = {
  price: {
    min: 10,
    max: 2000,
  },
  type: [],
  color: [],
  gender: [],
}

export default createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    priceChange: (state, action) => {
      state.price = action.payload
    },
  },
})
