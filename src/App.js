import { GetDataProducts } from 'apis';
import { GET_PRODUCTS } from 'Configs/url';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Routing } from 'Routes/Routes';
import { GET_DATA } from 'store/type/BasketType';
import './Assets/Styles/Components/app.scss';
import Layout from './Layouts/Layout.jsx';
function App() {
//   const dispatch = useDispatch();
//   const [DataProducts,setDataProducts] =useState([]);
//   useEffect(() => {
//     dispatch({
//      type: GET_DATA,
//      payload: {
//        url: GET_PRODUCTS,
//      },
//    });
//  }, []);

  return (
    <div dir="rtl" className="App">
      <Routing />
    </div>
  );
}

export default App;
