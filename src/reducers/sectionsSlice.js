import { createSlice } from '@reduxjs/toolkit';
import { formData } from '../utils/data';

const initialState = {
  personal: formData,
  skills: [{title: '', desc: ''}],
  lang: [{lang: '', desc: '', lvl: ''}],
  experiance: []
}

export const sectionsSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    changePersonal: (state, action) => {
      state.personal = action.payload;
    },
    changeSkills: (state, action) => {
      state.skills = action.payload;
    },
    addSkill: (state, action) => {
      state.skills = action.payload;
    },
    deleteSkill: (state, action) => {
      state.skills = action.payload;
    },
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
    addLang: (state, action) => {
      state.lang = action.payload;
    },
    deleteLang: (state, action) => {
      state.lang = action.payload;
    },
    addPosition: (state, action) => {
      state.experiance = action.payload;
    },
    changePosition: (state, action) => {
      state.experiance = action.payload;
    },
    deletePosition: (state, action) => {
      state.experiance = action.payload;
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

export const { 
  changePersonal, 
  changeSkills, 
  addSkill, 
  deleteSkill, 
  submitPersonal,
  changeLang,
  addLang,
  deleteLang,
  addPosition,
  changePosition,
  deletePosition } = sectionsSlice.actions;
export const personalSection = state => state.sections.personal;
export const skillsSection = state => state.sections.skills;
export const langSection = state => state.sections.lang;
export const expSection = state => state.sections.experiance;

export default sectionsSlice.reducer;