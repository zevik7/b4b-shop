import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../pages/Shop/Filters/filterSlice'
import bicycleSlice from './bicycle/bicycleSlice'
import checkoutSlice from './checkout/checkoutSlice'
import searchSlice from './search/searchSlice'

const store = configureStore({
  reducer: {
    shopFilter: filterSlice.reducer,
    bicycles: bicycleSlice.reducer,
    checkouts: checkoutSlice.reducer,
    search: searchSlice.reducer,
  },
})

export default store
