import { React, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { UserContext } from "../context/user.context";

import Footer from "../components/footer/Footer.component";
import Header from "../components/header/Header.component";
import About from "./about/About.layout";
import Authentication from "./authentication/Authentication.layout";
import Contact from "./contact/Contact.layout";
import Home from "./home/Home.layout";
import Shop from "./shop/Shop.layout";
import Blog from "./blog/Blog.layout";
import UserDashboard from "./user-dashboard/UserDashboard.layout";
import UserDashboardHome from "../components/user-dashboard-home/UserDashboardHome";
import AddressesView from "../components/addresses-view/AddressesView.component";
import AddressForm from "../components/address-form/AddressForm";
import AccountSettings from "../components/account-settings/AccountSettings";
import Orders from "../components/orders/Orders";
import AdminDashboard from "./admin-dashboard/AdminDashboard.layout";
import AdminDashboardHome from "../components/admin-dashboard-home/AdminDashboardHome.component";
import OrdersTable from "../components/orders-table/OrdersTable.component";
import UsersTable from "../components/users-table/UsersTable.component";
import ProductsTable from "../components/products-table/ProductsTable.component";
import BlogTable from "../components/blog-table/BlogTable.component";
import Cart from "./cart/Cart.layout";
import Reports from "../components/reports/Reports.component";
import Feedbacks from "../components/feedbacks/Feedbacks.component";
import Catagories from "../components/catagories/Catagories.component";
import ProductSingle from "../components/product-single/ProductSingle.component";
import BlogSingle from "../components/blog-single/BlogSingle.component";
import Checkout from "../components/checkout/Checkout.component";
import AdminOrders from "../components/admin-orders/AdminOrders.component";

function Layout() {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Footer />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="blog" element={<Blog />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="product" element={<ProductSingle />} />
        <Route path="post" element={<BlogSingle />} />
        {currentUser && (
          <Route path="dashboard" element={<UserDashboard />}>
            <Route index element={<UserDashboardHome />} />
            <Route path="addresses" element={<AddressesView />} />
            <Route path="address-modify" element={<AddressForm />} />
            <Route path="orders" element={<OrdersTable />} />
            <Route path="account-settings" element={<AccountSettings />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        )}{" "}
        {currentUser && currentUser.email === "admin@fancyhut.com" && (
          <Route path="admin" element={<AdminDashboard />}>
            <Route index element={<AdminDashboardHome />} />
            <Route path="admin-orders" element={<AdminOrders/>} />
            <Route path="users" element={<UsersTable />} />
            <Route path="blogs" element={<BlogTable />} />
            <Route path="products" element={<ProductsTable />} />
            <Route path="reports" element={<Reports />} />
            <Route path="feedbacks" element={<Feedbacks />} />
            <Route path="categories" element={<Catagories />} />
          </Route>
        )}{" "}
      </Route>
    </Routes>
  );
}

export default Layout;
