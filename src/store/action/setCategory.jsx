import { ADD_CART, GET_CATEGORIES } from "store/type/BasketType";


export const setCategory = (products) => {
  return {
    type: GET_CATEGORIES,
    payload: products,
  };
};
export const addTOBasket = (itemProductID,sizeShoes) => {
  return {
    type: ADD_CART,
    paylad: {
      id: itemProductID,
      sizeShoes: sizeShoes,
    }
  };
};

