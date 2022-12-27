import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  textColor: '',
}

export const themeSlice = createSlice({
  name: 'themeyou',
  initialState,
  reducers: {
    changeTextColor: (state, action) => {
      state.textColor = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTextColor } = themeSlice.actions

export default themeSlice.reducer