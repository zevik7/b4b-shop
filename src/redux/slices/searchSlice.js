import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    onChange: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { onChange } = searchSlice.actions
export default searchSlice
