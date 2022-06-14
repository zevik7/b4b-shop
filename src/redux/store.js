import { configureStore } from '@reduxjs/toolkit'
import filterSlice from '../pages/Shop/Filters/filterSlice'
import shopSlice from '../pages/Shop/shopSlice'

const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
    shopFilter: filterSlice.reducer,
  },
})

export default store
