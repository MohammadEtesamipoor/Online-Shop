import { GetProductsCategory } from "apis/ApiCategory";
import { GetProducts } from "apis/ApiProduct";
import { GET_PRODUCTS } from "Configs/url";
import { useDispatch } from "react-redux";
import {
  ADD_CART,
  DECREMENT_CART,
  GET_CATEGORIES,
  GET_DATA,
  REMOVE_CART,
} from "store/type/BasketType";

const initialStateCart = {
  cartListID: localStorage.getItem("basket")===null?[]:JSON.parse(localStorage.getItem("basket")),
  dataProduct: [],
  dataCategory: [],
};

export const reducerCategory = (
  state = initialStateCart,
  { type, payload }
) => {
  switch (type) {
    case GET_CATEGORIES:
      return { ...state, dataCategory: payload };
    default:
      return state;
  }
};

export const reducerBasket = (state = initialStateCart, action) => {
  switch (action.type) {
    case ADD_CART:
      let isRepeat = false;
      state.cartListID?.map((item) => {
        if (
          item.productId === action.paylad.id &&
          item.sizeShoes === action.paylad.sizeShoes
        ) {
          item.quantity++;
          isRepeat = true;
        }
      });
      const cartlist =
        isRepeat === true
          ? [...state.cartListID]
          : [
              ...state.cartListID,
              {
                productId: action.paylad.id,
                quantity: 1,
                sizeShoes: action.paylad.sizeShoes,
              },
            ];
      localStorage.setItem("basket", JSON.stringify(cartlist));
      return {
        cartListID:cartlist
      };
      break;
    case DECREMENT_CART:
      let isRepeatRemove = false;
      state.cartListID?.map((item) => {
        if (
          item.productId === action.paylad.id &&
          item.sizeShoes === action.paylad.sizeShoes
        ) {
          item.quantity--;
          isRepeatRemove = true;
        }
      });
      cartlist=  isRepeatRemove === true
      ? [...state.cartListID]
      : [
          ...state.cartListID,
          {
            productId: action.paylad.id,
            quantity: 1,
            sizeShoes: action.paylad.sizeShoes,
          },
        ]
      localStorage.setItem("basket", JSON.stringify(cartlist));

      return {
        cartListID:cartlist 
      };
      break;
    case REMOVE_CART:
      const newCartListID = [];
      const newCartListID2 = [];
      state.cartListID?.forEach((item) => {
        if (item.productId !== action.paylad.productId) {
          newCartListID.push(item);
        } else if (item.sizeShoes !== action.paylad.sizeShoes) {
          newCartListID.push(item);
        }
      });
      localStorage.setItem("basket", JSON.stringify(newCartListID));
      return {
        cartListID: [...newCartListID],
      };
      break;
    default:
      return state;
  }
};

// export function GetCat() {
//   const dispatch = useDispatch();
//   const getCategory = async  (dispatch)  => {
//     await GetProductsCategory().then((res) => {
//       console.log("res")
//       dispatch({
//         type: GET_DATA,
//         paylad: {
//           id: 5,
//           data: res,
//         },
//       });
//     });
//   };
//   getCategory()
// }
