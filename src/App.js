import { GetDataProducts } from "apis";
import { GetProductsCategory } from "apis/ApiCategory";
import { GetProducts } from "apis/ApiProduct";
import { GET_PRODUCTS } from "Configs/url";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routing } from "Routes/Routes";
import { setCategory } from "store/action/setCategory";
import { GetCat } from "store/store";

import { GET_DATA } from "store/type/BasketType";
import "./Assets/Styles/Components/app.scss";
import Layout from "./Layouts/Layout.jsx";
function App() {
  //   const dispatch = useDispatch();
  //   const [DataProducts,setDataProducts] =useState([]);y
  const [dataa,setDataa]=useState("")
  const products = useSelector((state) => state.category.dataCategory);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
      await GetProductsCategory().then((res) => {
      return setDataa(res.data);
    });
   
  };

  useEffect(() => {
    const getCate = async () => {
      const users = await GetProductsCategory().then((res) => {
         dispatch(setCategory(res.data));
        return setDataa(res.data);
      });  
    };
    getCate()
    // const GetDataProducts = async () => {
    //   const users = await GetProducts().then((res) => {
    //      dispatch(setCategory(res.data));
    //     return setDataa(res.data);
    //   });  
    // };
    // GetDataProducts()
  }, []);

  return (
    <div dir="rtl" className="App">
      <Routing />
    </div>
  );
}

export default App;
