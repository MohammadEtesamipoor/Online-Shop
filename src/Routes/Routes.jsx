import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
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

import { OutletRouter } from "./OutletRouter";
import Layout from "Layouts/Layout";

export const Routing = () => {
  return (
    <Router>
      <Routes>
        
        <Route element={<OutletRouter />}  >
          <Route path={PAGE.Main} element={<Layout main={<HomePage />} />} />
          <Route element={<Layout main={<HomePage />} />} />
          <Route path={PAGE.Home} element={<Navigate replace to='/' />} />
          <Route path={PAGE.Products} element={<Layout main={<ProductsPage />} />} />
          <Route path={PAGE.Product}element={<Layout main={<ProductPage />} />} />
          <Route path={PAGE.Basket}element={<Layout main={<BasketPage />} />}  />
          <Route path={PAGE.Checkouts}element={<Layout main={<CheckoutsPage />} />} />
          <Route path={PAGE.Login}element={<Layout main={<LoginPage />} />} />
        </Route>
        <Route>
          <Route path={PAGE.Admin_Product} element={<AdminProductPage />} />
          <Route path={PAGE.Admin_Order} element={<AdminOrdersPage />} />
          <Route path={PAGE.Admin_Quantity} element={<AdminQuantityPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
