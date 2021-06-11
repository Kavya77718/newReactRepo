import { actionTypes } from "../services/vegetable_Types";
export const setvegetables = (vegetables) => {
  return {
    type: actionTypes.SET_VEGETABLES,
    payload: vegetables,
  };
};

export const selectedvegetable = (vegetable) => {
  return {
    type: actionTypes.SELECTED_VEGETABLE,
    payload: vegetable,
  };
};
