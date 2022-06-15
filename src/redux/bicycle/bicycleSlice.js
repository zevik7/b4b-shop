import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { bicycle } from '../../api'

const initialState = {
  status: '',
  selected: {},
  data: [],
}

export default createSlice({
  name: 'bicycleSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
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
        state.selected = action.payload
        state.status = 'idle'
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

export const fetchBicycles = createAsyncThunk(
  'bicycle/fetchBicycles',
  async () => {
    const res = await bicycle.getList()
    console.log(res)
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
  async (bicycle) => {
    const res = await bicycle.update(bicycle)
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
