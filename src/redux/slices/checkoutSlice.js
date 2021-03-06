import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

import { checkout } from '../../api'

const initialState = {
  status: '',
  data: [],
}

const checkoutSlice = createSlice({
  name: 'checkoutSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch all
      .addCase(fetchCheckouts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCheckouts.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(fetchCheckouts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'idle'
      })
      // fetch
      .addCase(getCheckout.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCheckout.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(getCheckout.fulfilled, (state, action) => {
        state.selected = action.payload
        state.status = 'idle'
      })
      // create
      .addCase(createCheckout.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(createCheckout.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(createCheckout.fulfilled, (state) => {
        state.status = 'idle'
      })
      // update
      .addCase(updateCheckout.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateCheckout.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(updateCheckout.fulfilled, (state, action) => {
        state.status = 'idle'
        let index = _.findIndex(
          state.data,
          (checkout) => checkout.id === action.payload.id
        )
        state.data[index] = action.payload
      })
      // delete
      .addCase(deleteCheckout.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteCheckout.rejected, (state) => {
        state.status = 'error'
      })
      .addCase(deleteCheckout.fulfilled, (state) => {
        state.status = 'idle'
      })
  },
})

export default checkoutSlice

export const fetchCheckouts = createAsyncThunk(
  'checkout/fetchCheckouts',
  async () => {
    const res = await checkout.getList()
    return res.data
  }
)

export const getCheckout = createAsyncThunk(
  'checkout/getCheckout',
  async (id) => {
    const res = await checkout.get(id)
    return res.data
  }
)

export const createCheckout = createAsyncThunk(
  'checkout/createCheckout',
  async (data) => {
    const res = await checkout.create(data)
    return res.data
  }
)

export const updateCheckout = createAsyncThunk(
  'checkout/updateCheckout',
  async ({ id, data }) => {
    const res = await checkout.update({ id, data })
    return res.data
  }
)

export const deleteCheckout = createAsyncThunk(
  'checkout/deleteCheckout',
  async (id) => {
    const res = await checkout.destroy(id)
    return res.data
  }
)
