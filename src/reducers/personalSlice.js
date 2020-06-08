import { createSlice } from '@reduxjs/toolkit';

export const personalSlice = createSlice({
  name: 'personal',
  initialState: {
    firstName: '',
    secondName: '',
    lastName: '',
    jobTitle: '',
    phoneNumber: '',
    email: '',
  },
  reducers: {
    submit: (state, action) => {
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.lastName = action.payload.lastName;
      state.jobTitle = action.payload.jobTitle;
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
    },
  },
});

export const { submit } = personalSlice.actions;

export const selectFirstName = state => state.personal.firstName;
export const selectSecondName = state => state.personal.secondName;
export const selectLastName = state => state.personal.lastName;
export const selectJobTitle = state => state.personal.jobTitle;
export const selectPhoneNumber = state => state.personal.phoneNumber;
export const selectEmail = state => state.personal.email;

export default personalSlice.reducer;