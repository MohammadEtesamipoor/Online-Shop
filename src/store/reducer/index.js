import { combineReducers } from "redux";
import { reducerBasket, reducerCategory } from "./reducer";
const reducers = combineReducers({
  basket: reducerBasket,
  category: reducerCategory,
});
export default reducers;