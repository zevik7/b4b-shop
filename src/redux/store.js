import { configureStore } from '@reduxjs/toolkit'

import filterSlice from './slices/filterSlice'
import bicycleSlice from './slices/bicycleSlice'
import checkoutSlice from './slices/checkoutSlice'
import searchSlice from './slices/searchSlice'

const store = configureStore({
  reducer: {
    shopFilter: filterSlice.reducer,
    bicycles: bicycleSlice.reducer,
    checkouts: checkoutSlice.reducer,
    search: searchSlice.reducer,
  },
})

export default store
