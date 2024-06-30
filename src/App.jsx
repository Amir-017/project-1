import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Shop from "./Pages/Shopping/Shop";
import Footer from "./Components/Footer";
import Axios from "axios";
import AboutShop from "./Pages/Shopping/AboutShop";
import SignIn from "./Pages/Login/SignIn";
import SignUp from "./Pages/Login/SignUp";
import Profile from "./Pages/Profile/Profile";
import EditeProfile from "./Pages/Profile/EditeProfile";
import AdminControl from "./Pages/AboutAdmin/AdminControl";
import ControlUser from "./Pages/AboutAdmin/ControlUser";
import EditeUser from "./Pages/AboutAdmin/EditeUser";
import Products from "./Pages/AboutAdmin/ProductsOfAdmin/Products";
import AddProduct from "./Pages/AboutAdmin/ProductsOfAdmin/AddProduct";
import Editeproduct from "./Pages/AboutAdmin/ProductsOfAdmin/Editeproduct";
import NotFound from "./Pages/NotFound";

const App = () => {
  //
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [getUser, setGetUser] = useState(false);
  const [getusersOfAdmin, setGetusersOfAdmin] = useState(false);
  //
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [checkproduct, setcheckProduct] = useState({});
  //
  const getProducts = () => {
    Axios({
      method: "get",
      url: "http://localhost:3000/products",
    }).then((data) => setProducts(data.data));
  };
  useEffect(() => {
    getProducts();
  }, []);
  const getUsers = () => {
    Axios({
      method: "get",
      url: "http://localhost:3000/users",
    }).then((data) => setUsers(data.data));
  };

  useEffect(() => {
    getUsers();
  }, [getusersOfAdmin]);
  const obj = () => {
    Axios({
      method: "get",
      url: "http://localhost:3000/user",
    }).then((data) => setUser(data.data));
  };
  useEffect(() => {
    obj();
  }, []);

  return (
    <div className="">
      <Header />
      {/* first pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              setProduct={setProduct}
              product={product}
              setcheckProduct={setcheckProduct}
            />
          }
        />
        <Route
          path="/aboutshop"
          element={
            <AboutShop
              product={product}
              setProduct={setProduct}
              checkproduct={checkproduct}
            />
          }
        />
        {/* end of first pages */}
        {/* about admin */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/addproduct" element={<AddProduct />} />
        <Route path="/products/:id" element={<Editeproduct />} />
        <Route
          path="/controluser/:editeid"
          element={localStorage.k == "a" ? <EditeUser /> : <Home />}
        />
        //
        <Route
          path="/controluser"
          element={
            localStorage.k == "a" ? (
              <ControlUser
                users={users}
                setGetusersOfAdmin={setGetusersOfAdmin} //
              />
            ) : (
              <Home />
            )
          }
        />
        <Route
          path="/admincontrol"
          element={
            localStorage.k == "a" ? (
              <AdminControl users={users} user={user} products={products} />
            ) : (
              <Home />
            )
            //
          }
        />
        {/*end of about admin  */}
        {/* about user */}
        <Route path="/profile/:id" element={<EditeProfile />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/signin"
          element={
            <SignIn
              setGetUser={setGetUser}
              setGetusersOfAdmin={setGetusersOfAdmin}
            />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        {/* end of about user */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
