import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  setNewTask,
  toggleTask,
  updateTask,
} from "../redux/todoSlice";

function TodoList() {
  const task = useSelector((state) => state.todos.task);
  const newTask = useSelector((state) => state.todos.newTask);

  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(
      addTask({
        id: Date.now(),
        text: newTask,
        complete: false,
      })
    );
    dispatch(setNewTask(""));
  };

  const [selectTask, setSelectTask] = useState(null);

  const handleEditTask = (task) => {
    setSelectTask(task);
    dispatch(setNewTask(task.text));
  };

  const handleUpdateTask = () => {
    dispatch(updateTask({ ...selectTask, text: newTask }));
    dispatch(setNewTask(""));
    setSelectTask(null);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type='text'
        value={newTask}
        onChange={(e) => dispatch(setNewTask(e.target.value))}
      />
      <button onClick={selectTask ? handleUpdateTask : handleAddTask}>
        {selectTask ? "Update" : "Add"}
      </button>

      <ul>
        {task.map((element) => (
          <li key={element.id}>
            <span
              onClick={() => dispatch(toggleTask(element.id))}
              style={{
                textDecoration: element.complete ? "line-through" : "none",
              }}
            >
              {element.text}
            </span>
            <button onClick={() => handleEditTask(element)}>Edit</button>
            <button onClick={() => dispatch(deleteTask(element.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
