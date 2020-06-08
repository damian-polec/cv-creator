import { combineReducers } from '@reduxjs/toolkit';
import personal from '../reducers/personalSlice';
import styles from '../reducers/docStylesSlice';
import sections from '../reducers/sectionsSlice';

const rootReducer = combineReducers({ personal, styles, sections });

export default rootReducer;