import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { checkout } from '../../api'

const initialState = {
  status: "",
  selected: {
    user: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    bicycle: {
      id: 1,
      name: "Giant Fathom 29 2 2022",
      price: 1500,
      variants: {
        color: "Grey",
        frame: 19,
        size: "Large",
      },
      quantity: 2,
    },
    note: "",
  },
  data: [],
}

export default createSlice({
  name: 'checkoutSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchCheckouts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchCheckouts.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(fetchCheckouts.fulfilled, (state, action) => {
        state.data = action.payload
        state.status = 'idle'
      })
      // fetch
      .addCase(getCheckout.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getCheckout.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(getCheckout.fulfilled, (state, action) => {
        state.selected = action.payload
        state.status = 'idle'
      })
      // create
      .addCase(createCheckout.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(createCheckout.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(createCheckout.fulfilled, (state, action) => {
        state.status = 'idle'
      })
      // update
      .addCase(updateCheckout.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(updateCheckout.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(updateCheckout.fulfilled, (state, action) => {
        state.status = 'idle'
      })
      // delete
      .addCase(deleteCheckout.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(deleteCheckout.rejected, (state, action) => {
        state.status = 'error'
      })
      .addCase(deleteCheckout.fulfilled, (state, action) => {
        state.status = 'idle'
      })
  },
})

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
  async (checkout) => {
    const res = await checkout.update(checkout)
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
