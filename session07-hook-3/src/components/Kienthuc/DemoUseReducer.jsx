import React, { useReducer } from "react";

function DemoUseReducer() {
  // useReducer là 1 hook được cung cấp bởi react. Được sử dụng như 1 lựa chọn thay thế useState
  // useState sẽ được dùng trong các component đơn giản
  // useReducer sẽ được sử dụng trong các component phức tạp

  // useState
  // 1. initialState: 0
  // 2. Action: Down(initialState - 1) Up(initialState + 1)

  // useReducer
  // 1. initialState: 0
  // 2. Action: Down(initialState - 1) Up(initialState + 1)
  // 3. Reducer: Nơi xử lý các logic được gửi từ action
  // 4. Dispatch

  // 1. initialState
  const initialState = 10;

  // 2. Action
  const UP_ACTION = "UP";
  const DOWN_ACTION = "DOWN";

  // 3. Reducer
  // Reducer là 1 hàm, nhận 2 tham số: 1 là state hiện tại, 2 là action được gửi lên
  // Mỗi khi reducer được gọi thì sẽ dựa vào state hiện tại và action là gì để quyết định trả về state mới
  const reducer = (state, action) => {
    console.log("state", state); // 10
    console.log("action", action); // UP
    switch (action) {
      case UP_ACTION:
        return state + 1; // 10 + 1 || 11 + 1
      case DOWN_ACTION:
        return state - 1; // 12 - 1
      default:
        break;
    }
  };

  // State = 11
  // State = 12
  // State = 11

  // 4. Dispatch
  const [count, dispatch] = useReducer(reducer, initialState);
  // Khi component được chạy sẽ chạy useReducer nhưng sẽ chưa gọi đến reducer
  // Giá trị initialState sẽ được gián vào count
  // dispatch sẽ thay thế cho setCount

  return (
    <div>
      <div>Demo useReducer</div>
      <p>{count}</p>
      <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
      <button onClick={() => dispatch(UP_ACTION)}>UP</button>
    </div>
  );
}

export default DemoUseReducer;
