import { GetProducts } from "apis/ApiProduct";
import { ADD_CART, DECREMENT_CART, GET_DATA, REMOVE_CART } from "store/type/BasketType";

const initialStateCart = {
  cartListID: [],
  dataProduct:[]
};

export const reducer = (state = initialStateCart, action) => {
  if(action.type===GET_DATA){
      let tst = "khalii"
      const data =async()=>{
         await GetProducts().then((response) => {
          console.log("response.data");
          tst = response.data
          return{
            dataProduct:tst
          } 
      })
      }
      console.log(data);
  }else{
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
        return {
          cartListID:
            isRepeat === true
              ? [...state.cartListID]
              : [
                  ...state.cartListID,
                  {
                    productId: action.paylad.id,
                    quantity: 1,
                    sizeShoes: action.paylad.sizeShoes,
                  },
                ],
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
        return {
          cartListID:
            isRepeatRemove === true
              ? [...state.cartListID]
              : [
                  ...state.cartListID,
                  {
                    productId: action.paylad.id,
                    quantity: 1,
                    sizeShoes: action.paylad.sizeShoes,
                  },
                ],
        };
        break;
      case REMOVE_CART:
        const newCartListID = [];
        const newCartListID2 = [];
        state.cartListID?.forEach((item) => {
          if (item.productId !== action.paylad.productId){
              newCartListID.push(item)
          }else if(item.sizeShoes !== action.paylad.sizeShoes){
              newCartListID.push(item)
          }
  
        });
        return {
          cartListID: [...newCartListID],
        };
        break;
      default:
        return {
          cartListID:[]
        };
    }
  }
};
