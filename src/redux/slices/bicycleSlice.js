import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

import { bicycle } from '../../api'

const initialState = {
  status: '',
  selected: {
    createdAt: '',
    name: '',
    price: '',
    brand: '',
    type: '',
    gender: '',
    material: '',
    variants: [],
    description: '',
    images: [],
    rating: '',
    id: '',
  },
  data: [],
  pagination: {
    current: 1,
    pageSize: 6,
    total: null,
  },
}

const bicycleSlice = createSlice({
  name: 'bicycleSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.status = action.payload
    },
    changeCurrentPage: (state, action) => {
      state.pagination.current = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all
      .addCase(fetchBicycles.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBicycles.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchBicycles.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data = action.payload
        state.pagination.total = action.payload.length
      })
      // fetch
      .addCase(getBicycle.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getBicycle.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(getBicycle.fulfilled, (state, action) => {
        state.status = 'idle'
        state.selected = action.payload
      })
      // create
      .addCase(createBicycle.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createBicycle.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(createBicycle.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data.push(action.payload)
      })
      // update
      .addCase(updateBicycle.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateBicycle.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(updateBicycle.fulfilled, (state, action) => {
        state.status = 'idle'
        let index = _.findIndex(state.data, (o) => o.id === action.payload.id)
        state.data[index] = action.payload
      })
      // delete
      .addCase(deleteBicycle.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteBicycle.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(deleteBicycle.fulfilled, (state, action) => {
        state.status = 'idle'
        let index = _.findIndex(state.data, (o) => o.id === action.payload.id)
        state.data.splice(index, 1)
      })
  },
})

export default bicycleSlice

export const { setLoading, changeCurrentPage } = bicycleSlice.actions

export const fetchBicycles = createAsyncThunk(
  'bicycle/fetchBicycles',
  async () => {
    const res = await bicycle.getList()
    return res.data
  }
)

export const getBicycle = createAsyncThunk('bicycle/getBicycle', async (id) => {
  const res = await bicycle.get(id)
  return res.data
})

export const createBicycle = createAsyncThunk(
  'bicycle/createBicycle',
  async (bikeData) => {
    const res = await bicycle.create(bikeData)
    return res.data
  }
)

export const updateBicycle = createAsyncThunk(
  'bicycle/updateBicycle',
  async ({ id, data }) => {
    const res = await bicycle.update(id, data)
    return res.data
  }
)

export const deleteBicycle = createAsyncThunk(
  'bicycle/deleteBicycle',
  async (id) => {
    const res = await bicycle.destroy(id)
    return res.data
  }
)
