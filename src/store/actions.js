import * as actions from "./actionTypes";

export const addingHabit = (data) => {
  return {
    type: actions.ADD_HABIT,
    payload: {
      title: data.habit,
      category: data.category,
    },
  };
};

export const deletingHabit = (id) => {
  return {
    type: actions.DELETE_HABIT,
    id,
  };
};

export const changingStatus = (habit, weekId, status) => {
  return {
    type: actions.CHANGE_STATUS,
    payload: {
      habit,
      weekId,
      status,
    },
  };
};

export const updatingHabits = () => {
  return {
    type: actions.UPDATE_HABITS,
  };
};
