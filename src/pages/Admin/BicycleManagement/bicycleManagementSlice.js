import { createSlice } from '@reduxjs/toolkit'
import { getBicyclesAPI } from '../../../api'
import { statusCode } from '../../../constants'

const initialState = []

export const bicycleManagementSlice = createSlice({
  name: 'bicycles',
  initialState,
  reducers: {
    getBicycles: (state) => {},
  },
})
export const { getBicycles } = bicycleManagementSlice.actions
export default bicycleManagementSlice.reducer
