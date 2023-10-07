import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    count: 0,
    task: [],
    newTask: "",
  },
  reducers: {
    incremented: (state, action) => {
      state.count += action.payload;
    },
    decremented: (state, action) => {
      state.count -= action.payload;
    },

    // Todolist
    setNewTask: (state, action) => {
      state.newTask = action.payload;
    },
    addTask: (state, action) => {
      state.task.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.task = state.task.filter((e) => e.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const todo = state.task.find((e) => e.id === action.payload);
      todo.complete = !todo.complete;
    },
    updateTask: (state, action) => {
      state.task = state.task.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
    },
  },
});

export const {
  incremented,
  decremented,
  addTask,
  setNewTask,
  deleteTask,
  toggleTask,
  updateTask,
} = todoSlice.actions;

export default todoSlice.reducer;
