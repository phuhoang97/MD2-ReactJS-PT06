import * as actionType from "../constant/actionType";

export const act_count_up = (value) => {
  return {
    type: actionType.ACT_UP,
    payload: value,
  };
};

export const act_count_down = (value) => {
  return {
    type: actionType.ACT_DOWN,
    payload: value,
  };
};

export const act_count_random = () => {
  return {
    type: actionType.ACT_RANDOM,
  };
};

export const act_list_random = () => {
  return {
    type: actionType.ACT_RANDOM_LIST,
  };
};
