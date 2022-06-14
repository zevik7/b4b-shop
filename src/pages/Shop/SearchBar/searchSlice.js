import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBicycles } from '../../api'

const initialState = {
  value: '',
}

export default createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    priceChange: (state, action) => {
      state.price = action.payload
    },
  },
})
