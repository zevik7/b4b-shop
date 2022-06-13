import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBicycles } from '../../api'

const initialState = {
  filter: {
    search: '',
    price: {
      min: 10,
      max: 2000,
    },
    type: [],
    color: [],
    gender: [],
  },
  bicycles: {
    status: 'idle',
    data: [],
  },
}

export default createSlice({
  name: 'shopSlice',
  initialState,
  reducers: {
    searchFilterChange: (state, action) => {
      state.filter.search = action.payload
    },
    searchPriceChange: (state, action) => {
      state.filter.price = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBicycles.pending, (state, action) => {
        state.bicycles.status = 'loading'
      })
      .addCase(fetchBicycles.fulfilled, (state, action) => {
        state.bicycles.data = action.payload
        state.bicycles.status = 'idle'
      })
  },
})

export const fetchBicycles = createAsyncThunk(
  'shop/fetchBicycles',
  async () => {
    const res = await getBicycles()
    return res.data
  }
)
