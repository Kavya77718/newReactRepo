import { actionTypes } from "../services/vegetable_Types";

const INITIAL_STATE = {
  vegetables: [],
};
export const vegetableReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_VEGETABLES:
      return { ...state, vegetables: payload };
    default:
      return state;
  }
};

export const selectedvegetableReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionTypes.SELECTED_VEGETABLE:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECTED_VEGETABLE:
      return {};  
    default:
      return state;
  }
};

