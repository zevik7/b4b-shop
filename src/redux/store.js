import { configureStore } from '@reduxjs/toolkit'
import shopSlice from '../pages/Shop/shopSlice'

const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
  },
})

export default store
