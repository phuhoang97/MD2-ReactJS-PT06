import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremented, incremented } from "../redux/todoSlice";

function Count() {
  const count = useSelector((state) => state.todos.count);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Tăng / Giảm Count</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(incremented(10))}>Up</button>
      <button onClick={() => dispatch(decremented(5))}>Down</button>
    </div>
  );
}

export default Count;
