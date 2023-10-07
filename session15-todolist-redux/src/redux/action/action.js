// Khai báo constant action
export const SET_NEW_TASK = "SET_NEW_TASK";
export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

// Khai báo action
export const setNewTask = (task) => {
  return {
    type: SET_NEW_TASK,
    payload: task,
  };
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export const toggleTask = (taskId) => {
  return {
    type: TOGGLE_TASK,
    payload: taskId,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};

export const updateTask = (task) => {
  return {
    type: UPDATE_TASK,
    payload: task,
  };
};
