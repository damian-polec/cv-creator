import { createSlice } from '@reduxjs/toolkit';

const docStylesSlice = createSlice({
  name: 'styles',
  initialState: {
    font: 'Roboto',
    nameSize: 24,
    jobTitleSize: 16,
    background: {
      main: '#005C85',
      title: '#004A6A'
    }
  },
  reducers: {
    init: state => state
  }
})

export const { init } = docStylesSlice.actions;

export const selectBg = state => state.styles.background;

export default docStylesSlice.reducer