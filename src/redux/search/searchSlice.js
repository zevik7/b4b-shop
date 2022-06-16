import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBicycles } from '../../api'

const initialState = {
  value: '',
}

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    onChange: (state, action) => {
      state.value = action.payload

      console.log(action.payload)
    },
  },
})

export const { onChange } = searchSlice.actions
export default searchSlice
