import * as helper from "./helper";
import * as actions from "./actionTypes";

// Getting up all the habits from local storage

let habits = localStorage.getItem("habits");
let initialState = [];

if (habits === null || habits === []) {
  localStorage.setItem("habits", JSON.stringify(new Array(0)));
  initialState = [];
}

if (habits !== null && habits !== []) {
  initialState = JSON.parse(habits);
}

// Cretaing up a habit reducer function
function HabitReducer(state = initialState, action) {
  // Adding Habit
  if (action.type === actions.ADD_HABIT) {
    const newHabit = {
      id: Math.random() * 1000,
      title: action.payload.title,
      category: action.payload.category,
      week: helper.createWeek(new Date()),
      workDone: 0,
      ratings: 0,
    };
    const newState = [newHabit, ...state];
    localStorage.setItem("habits", JSON.stringify(newState));
    return newState;
  }

  // Deleting Habits

  if (action.type === actions.DELETE_HABIT) {
    const newHabits = state.filter((habit) => habit.id !== action.id);
    localStorage.setItem("habits", JSON.stringify(newHabits));
    return newHabits;
  }

  // Checking for changing the status of the habit
  if (action.type === actions.CHANGE_STATUS) {
    const habitIndex = state.indexOf(action.payload.habit);
    if (state[habitIndex].week[action.payload.weekId].status === "done") {
      state[habitIndex].workDone += -1;
    }else if(action.payload.status === "done"){
      state[habitIndex].workDone += 1;
    }
    state[habitIndex].week[action.payload.weekId].status=action.payload.status;
    localStorage.setItem("habits",JSON.stringify(state));
    return state;
  }

  // Checking for updating the habits
    if(action.type === actions.UPDATE_HABITS){
      const newState = helper.updateHabits(state);
      localStorage.setItem("habits", JSON.stringify(newState))
      return state;
    }

  return state;
}

export default HabitReducer;
