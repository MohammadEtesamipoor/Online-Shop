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

export const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* public routes  */}
        <Route path="*" element={<Layout main={<HomePage />} />} />
        <Route element={<PublicRoute />}>
          <Route path={PAGE.Main} element={<Layout main={<HomePage />} />} />
          <Route element={<Layout main={<HomePage />} />} />
          <Route path={PAGE.Home} element={<Navigate replace to="/" />} />

          <Route
            path={PAGE.Products}
            element={<Layout main={<ProductsPage />} />}
          />
          <Route
            path={`${PAGE.Products}/:categoryId`}
            element={<Layout main={<ProductsPage />} />}
          />

          <Route
            path={PAGE.Product}
            element={<Layout main={<ProductPage />} />}
          />
          <Route
            path="/product/:productId"
            element={<Layout main={<ProductPage />} />}
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
            element={<Layout isAdmin="true" main={<AdminProductPage />} />}
          />
          <Route
            path={PAGE.Admin_Order}
            element={<Layout isAdmin="true" main={<AdminOrdersPage />} />}
          />
          <Route
            path={PAGE.Admin_Quantity}
            element={<Layout isAdmin="true" main={<AdminQuantityPage />} />}
          />
        </Route>
        {/* private routes */}
        <Route element={<PrivateRoute />}>
          <Route path={PAGE.Login} element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
