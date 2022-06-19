import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { bicycle } from '../../api'
import _ from 'lodash'

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
}

const bicycleSlice = createSlice({
  name: 'bicycleSlice',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.status = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch all
      .addCase(fetchBicycles.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchBicycles.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(fetchBicycles.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'idle'
      })
      // fetch
      .addCase(getBicycle.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getBicycle.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(getBicycle.fulfilled, (state, action) => {
        state.status = 'idle'
        state.selected = action.payload
      })
      // create
      .addCase(createBicycle.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(createBicycle.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(createBicycle.fulfilled, (state, action) => {
        state.status = 'idle'
        state.data.push(action.payload)
      })
      // update
      .addCase(updateBicycle.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(updateBicycle.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(updateBicycle.fulfilled, (state, action) => {
        state.status = 'idle'
        let index = _.findIndex(state.data, (o) => o.id === action.payload.id)
        state.data[index] = action.payload
      })
      // delete
      .addCase(deleteBicycle.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(deleteBicycle.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(deleteBicycle.fulfilled, (state, action) => {
        state.status = 'idle'
      })
  },
})

export default bicycleSlice

export const { setLoading } = bicycleSlice.actions

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
