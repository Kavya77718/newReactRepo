import { actionTypes } from "../services/vegetable_Types";

const INITIAL_STATE = {
  vegetables: [],
};
const vegetable_reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_VEGETABLES:
      return { ...state, vegetables: payload };
    default:
      return state;
  }
};
export default vegetable_reducer;
