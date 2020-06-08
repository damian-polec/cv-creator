import { createSlice } from '@reduxjs/toolkit';
import { formData } from '../utils/data';

const initialState = {
  personal: formData
}

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    changePersonal: (state, action) => {
      state.personal = action.payload;
    },
    submitPersonal: (state, action) => {
      state.personal.firstName = action.payload.firstName;
      state.personal.secondName = action.payload.secondName;
      state.personal.lastName = action.payload.lastName;
      state.personal.jobTitle = action.payload.jobTitle;
      state.personal.phoneNumber = action.payload.phoneNumber;
      state.personal.email = action.payload.email;
    },
  },
});

export const { changePersonal, submitPersonal } = sectionsSlice.actions;
export const personalSection = state => state.sections.personal;

export default sectionsSlice.reducer;