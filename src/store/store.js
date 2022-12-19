import {createStore,applyMiddleware } from 'redux'
import reducers from './reducer/index'
import thunk from 'redux-thunk';
import { GetProductsCategory } from 'apis/ApiCategory';
import { GET_DATA } from './type/BasketType';
import { useDispatch } from 'react-redux';
// export const store= createStore(reducers,applyMiddleware(thunk))

export const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  