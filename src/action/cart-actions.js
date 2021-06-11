export const addItemToCart = (vegetable) => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: vegetable,
  };
};