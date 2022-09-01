import { ADD_CART, REMOVE_CART } from "store/type/BasketType";

const initialStateCart = {
  cartListID: [],
};

export const reducer = (state = initialStateCart, action) => {
  switch (action.type) {
    case ADD_CART:
      let isRepeat = false;
      state.cartListID?.map((item) => {
        if (item.productId === action.paylad.id&& item.sizeShoes === action.paylad.sizeShoes) {
          item.quantity++;
          isRepeat = true;
        }
      });
      return {
        cartListID: (isRepeat===true)
          ? [...state.cartListID]
          : [...state.cartListID, { productId: action.paylad.id, quantity: 1,sizeShoes:action.paylad.sizeShoes }],
      };
      break;
    default:
      return state;
  }
};
