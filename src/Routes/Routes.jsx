import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { PAGE } from "Configs/route";

import {
  CheckoutsPage,
  HomePage,
  LoginPage,
  ProductPage,
  ProductsPage,
  BasketPage,
  AdminQuantityPage,
  AdminOrdersPage,
  AdminProductPage,
} from "Pages";

import { PublicRoute } from "./PublicRoute";
import Layout from "Layouts/Layout";
import { ProtectedRoute } from "./ProtectedRoute";
import { PrivateRoute } from "./PrivateRoute";
import AuthProvider from "Context/AuthContext";
import ColorHeaderProvider from "Context/headerColor";
import Page404 from "Pages/404/Page404";
import { useEffect, useState } from "react";
import ColorHeaderContext from "Context/headerColor";
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { GET_DATA } from "store/type/BasketType";
import { GET_PRODUCTS } from "Configs/url";

export const Routing = () => {
  const dispatch = useDispatch();
  const [DataProducts, setDataProducts] = useState([]);
  const [theme,setTheme] = useState()
  
  useEffect(()=>{
    if(localStorage.getItem("THEME")===null) localStorage.setItem("THEME","light");

  },[])
  const [color, setColor] = useState({
    selected:"light",
    "dark":{
      clr: "#F3F3F3",
      // clr:"#313238",
      bgClr: "#313238",
      // bgClr:"#9394a5"
    },
    "light":{
      clr: "#313238",
      // clr:"#313238",
      bgClr: "#F9F9F9",
      // bgClr:"#9394a5"
    },
  });
  return (
    <Box fontSize="sm">
      <Router>
        <ColorHeaderContext.Provider value={{ color, setColor }}>
          <AuthProvider>
            <Routes>
              {/* public routes  */}
              <Route path="*" element={<Layout main={<Page404 />} />} />
              <Route element={<PublicRoute />}>
                <Route
                  path={PAGE.Main}
                  element={<Layout main={<HomePage />} />}
                />
                <Route element={<Layout main={<Page404 />} />} />
                <Route path={PAGE.Home} element={<Navigate replace to="/" />} />

                <Route
                  path={PAGE.Products}
                  element={<Layout main={<ProductsPage />} />}
                />
                <Route
                  path={`${PAGE.Products}/:categoryId`}
                  element={<Layout main={<ProductsPage />} replace />}
                />

                <Route
                  path={PAGE.Product}
                  element={<Layout main={<ProductPage />} replace />}
                />
                <Route
                  path="/product/:productId"
                  element={<Layout main={<ProductPage />} replace />}
                />

                <Route
                  path={PAGE.Basket}
                  element={<Layout main={<BasketPage />} />}
                />
                <Route
                  path={PAGE.Checkouts}
                  element={<Layout main={<CheckoutsPage />} />}
                />
              </Route>
              {/* Protected Route Admin */}
              <Route element={<ProtectedRoute />}>
                <Route
                  path={PAGE.Admin_Product}
                  element={
                    <Layout isAdmin="true" main={<AdminProductPage />} />
                  }
                />
                <Route
                  path={PAGE.Admin_Order}
                  element={<Layout isAdmin="true" main={<AdminOrdersPage />} />}
                />
                <Route
                  path={PAGE.Admin_Quantity}
                  element={
                    <Layout isAdmin="true" main={<AdminQuantityPage />} />
                  }
                />
              </Route>
              {/* private routes */}
              <Route element={<PrivateRoute />}>
                <Route path={PAGE.Login} element={<LoginPage />} />
              </Route>
            </Routes>
          </AuthProvider>
        </ColorHeaderContext.Provider>
      </Router>
    </Box>
  );
};
