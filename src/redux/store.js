import { configureStore } from '@reduxjs/toolkit'
import bicycleReducer from '../pages/Admin/BicycleManagement/bicycleManagementSlice'

const store = configureStore({
  reducer: {
    bicycles: bicycleReducer,
  },
})

export default store
