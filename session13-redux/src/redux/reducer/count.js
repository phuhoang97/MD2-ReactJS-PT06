import * as actionType from "../constant/actionType";

// Bước 1: khai báo state ban đầu
const initialState = 0;

// Bước 2: khai báo hàm reducer
/* Hàm reducer nhận 2 tham số: 
tham số 1 là state hiện tại
tham số 2 là action: hành động được gửi lên store

khi action được gửi lên sẽ có dạng là 1 object
{
    type: "tên action",
    payload: value
}

*/
const count = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ACT_UP:
      state += action.payload;
      return state;
    case actionType.ACT_DOWN:
      state -= action.payload;
      return state;
    case actionType.ACT_RANDOM:
      state = Math.floor(Math.random() * 10);
      return state;
    default:
      break;
  }
  return state;
};

export default count;
