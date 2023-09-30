import * as actionType from "../constant/actionType";

const initialState = [3, 5, 7, 9];

// Đối với các kiểu dữ liệu tham chiếu sẽ cần sử dụng mutate để bảo lưu lại giá trị ban đầu

const list = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ACT_RANDOM_LIST:
      state = [...state, Math.floor(Math.random() * 10)];
      return state;

    default:
      return state;
  }
};

export default list;
