import { createSlice } from '@reduxjs/toolkit'

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    currentItem: null
  },
  reducers: {
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload
    },
  }
});



export const { setCurrentItem } = itemSlice.actions;
export default itemSlice.reducer;