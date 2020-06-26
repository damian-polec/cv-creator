import { createSlice } from '@reduxjs/toolkit';
import { formData } from '../utils/data';

const initialState = {
  personal: [
    {
        value: 'Jan',
        label: 'Imię',
        type: 'text',
        name: 'firstName',
        key: 'firstName',
        isFilled: true,
        group: 'personal'
    },
    {
      value: '',
      label: 'Drugię Imię',
      type: 'text',
      name: 'middleName',
      key: 'middleName',
      isFilled: false,
      group: 'personal'
    },
    {
      value: 'Kowalski',
      label: 'Nazwisko',
      type: 'text',
      name: 'lastName',
      key: 'lastName',
      isFilled: true,
      group: 'personal'
    },
    {
      value: 'Doradca Klienta',
      label: 'Tytuł Zawodowy',
      type: 'text',
      name: 'jobTitle',
      key: 'jobTitle',
      isFilled: true,
      group: 'personal'
    },
    {
      value: '+48 215 123 256',
      label: 'Numer Telefonu',
      type: 'text',
      name: 'phoneNumber',
      key: 'phoneNumber',
      isFilled: true,
      group: 'contact'
    },
    {
      value: 'jan.kowalski@przyklad.pl',
      label: 'Email',
      type: 'text',
      name: 'email',
      key: 'email',
      isFilled: true,
      group: 'contact'
    }
  ],
  skills: [
    {title: 'Efektywne zarządzanie dokumentacją', desc: ''},
    {title: 'Rozliczanie podróży służbowych', desc: ''}, 
    {title: 'Tworzenie pism urzędowych', desc: ''}
  ],
  lang: [{lang: 'Angielski', desc: '', lvl: ''}],
  experiance: [{
    company: 'ABC SA',
    city: 'Gdańsk',
    country: 'Polska',
    position: 'Doradca Klienta',
    startDate: '26 Jun 2016 21:01:53 GMT',
    endDate: 'Fri, 26 Jun 2020 21:01:53 GMT"',
    isPresent: true,
    positionDesc: {
      raw: '<ul> <li>Aktywne pozyskiwanie klient&oacute;w</li> <li>Realizacja cel&oacute;w sprzedażowych przy zachowaniu standar&oacute;w obsługi i dochodowości</li> <li>Sprzedaż produkt&oacute;w bankowych</li> <li>Dbałość o standardy obsługi klienta oraz kształtowanie pozytywnego wizerunku banku</li> <li>Profesjonalne doradztwo</li> </ul>',
      formatted: [
        {
          tag: '<ul>',
          listItems: [
            {
              tag: '<li>',
              value: 'Aktywne pozyskiwanie klient&oacute;w',
              isBold: false,
              isUnderline: false,
              isCursive: false
            },
            {
              tag: '<li>',
              value: 'Realizacja cel&oacute;w sprzedażowych przy zachowaniu standar&oacute;w obsługi i dochodowości',
              isBold: false,
              isUnderline: false,
              isCursive: false
            },
            {
              tag: '<li>',
              value: 'Sprzedaż produkt&oacute;w bankowych',
              isBold: false,
              isUnderline: false,
              isCursive: false
            },      
            {
              tag: '<li>',
              value: 'Dbałość o standardy obsługi klienta oraz kształtowanie pozytywnego wizerunku banku',
              isBold: false,
              isUnderline: false,
              isCursive: false
            },      
            {
              tag: '<li>',
              value: 'Profesjonalne doradztwo',
              isBold: false,
              isUnderline: false,
              isCursive: false
            },                  
          ]
        }
      ]
    }
  }],
  education: [],
  courses: [],
  cert: [],
  projects: [],
  hobby: [],
  clause: 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez (nazwa firmy) w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.'
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
    addSchool: (state, action) => {
      state.education = action.payload;
    },
    editSchool: (state, action) => {
      state.education = action.payload;
    },
    deleteSchool: (state, action) => {
      state.education = action.payload;
    },
    addCourse: (state, action) => {
      state.courses = action.payload;
    },
    editCourse: (state, action) => {
      state.courses = action.payload;
    },
    deleteCourse: (state, action) => {
      state.courses = action.payload;
    },
    addCert: (state, action) => {
      state.cert = action.payload;
    },
    editCert: (state, action) => {
      state.cert = action.payload;
    },
    deleteCert: (state, action) => {
      state.cert = action.payload;
    },
    addProject: (state, action) => {
      state.projects = action.payload;
    },
    editProject: (state, action) => {
      state.projects = action.payload;
    },
    deleteProject: (state, action) => {
      state.projects = action.payload;
    },
    addHobby: (state, action) => {
      state.hobby = action.payload;
    },
    editHobby: (state, action) => {
      state.hobby = action.payload;
    },
    deleteHobby: (state, action) => {
      state.hobby = action.payload;
    },
    editClause: (state, action) => {
      state.clause = action.payload;
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
  deletePosition,
  addSchool,
  editSchool,
  deleteSchool,
  addCourse,
  editCourse,
  deleteCourse,
  addCert,
  editCert,
  deleteCert,
  addProject,
  editProject,
  deleteProject,
  addHobby,
  editHobby,
  deleteHobby,
  editClause } = sectionsSlice.actions;

export const personalSection = state => state.sections.personal;
export const skillsSection = state => state.sections.skills;
export const langSection = state => state.sections.lang;
export const expSection = state => state.sections.experiance;
export const eduSection = state => state.sections.education;
export const coursesSection = state => state.sections.courses;
export const certSection = state => state.sections.cert;
export const projectsSection = state => state.sections.projects;
export const hobbySection = state => state.sections.hobby;
export const clauseSection = state => state.sections.clause;

export default sectionsSlice.reducer;