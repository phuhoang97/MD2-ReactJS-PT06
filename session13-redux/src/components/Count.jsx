import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  act_count_up,
  act_count_down,
  act_count_random,
} from "../redux/action";

function Count() {
  // Để lấy state từ store về => useSelector
  const count = useSelector((state) => state.count);

  // Sử dụng useDispatch để gửi hành động lên store
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count Component</h1>
      <p>{count}</p>
      <button onClick={() => dispatch(act_count_up(10))}>Up</button>
      <button onClick={() => dispatch(act_count_down(5))}>Down</button>
      <button onClick={() => dispatch(act_count_random())}>Random</button>
    </div>
  );
}

export default Count;
