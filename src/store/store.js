// Importing required files and libraries
import { createStore } from "redux";
import HabitReducer from './reducer'

// Creating up the store
const store = createStore(HabitReducer);

export default store;
