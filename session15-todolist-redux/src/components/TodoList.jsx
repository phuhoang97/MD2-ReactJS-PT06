import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewTask,
  addTask,
  toggleTask,
  deleteTask,
  updateTask,
} from "../redux/action/action";

function TodoList() {
  const tasks = useSelector((state) => state.tasks);
  const newTask = useSelector((state) => state.newTask);

  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), text: newTask, complete: false }));
    dispatch(setNewTask(""));
  };

  const [selectTask, setSelectTask] = useState(null);

  const handleEdit = (task) => {
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
        {tasks.map((element, index) => (
          <li key={index}>
            <span
              onClick={() => dispatch(toggleTask(element.id))}
              style={{
                textDecoration: element.complete ? "line-through" : "none",
              }}
            >
              {element.text}
            </span>
            <button onClick={() => handleEdit(element)}>Edit</button>
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
