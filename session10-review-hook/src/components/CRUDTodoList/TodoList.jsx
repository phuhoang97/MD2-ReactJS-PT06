import React, { useState } from "react";

function TodoList() {
  // Todolist: [{
  //text: Homework,
  // complete: fasle
  // }]
  // Bước 1: Khai báo state lưu trữ
  const [todo, setTodo] = useState([]);

  // Bước 2: Khai báo state để lưu trữ value trong ô input
  const [text, setText] = useState("");

  // Bước 3: Thêm dữ liệu ng dùng nhập trong input vào trong mảng ban đầu
  const handleAdd = () => {
    if (text !== "") {
      setTodo([...todo, { text: text, complete: false }]);
      setText("");
    }
  };

  // Bước 4: Set lại giá trị cho complete
  const handleToggle = (index) => {
    const todoComplete = todo.map((e, i) =>
      index === i ? { ...e, complete: !e.complete } : e
    );
    setTodo(todoComplete);
  };

  // Bước 5: Delete
  const handleDelete = (index) => {
    const deleteTodo = [...todo];
    deleteTodo.splice(index, 1);
    setTodo(deleteTodo);
  };

  // Bước 6: Update
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  console.log(editIndex);
  console.log(editText);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditText(todo[index].text);
  };

  const handleUpdate = () => {
    const updateTodo = [...todo];
    updateTodo[editIndex].text = editText;
    setTodo(updateTodo);
    setEditIndex(-1);
  };

  //   console.log(todo);
  return (
    <div>
      <h1>TodoList</h1>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todo.map((element, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type='text'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleUpdate}>Update</button>
              </div>
            ) : (
              <>
                <span
                  onClick={() => handleToggle(index)}
                  style={{
                    textDecoration: element.complete ? "line-through" : "",
                  }}
                >
                  {element.text}
                </span>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
