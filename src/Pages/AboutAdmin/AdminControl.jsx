import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AdminControl = ({ products, users, user }) => {
  return (
    <div className=" w-full  grid  grid-cols-1 md:grid-cols-2 justify-items-center items-center bg-gray-100">
      <div className=" w-[85%]  bg-black rounded-2xl  mt-32  mb-20">
        <div className="w-full  flex flex-col justify-center items-center gap-y-16">
          <h1 className="mt-5 text-4xl text-gray-500 font-bold">Users</h1>
          <div className="flex flex-col md:flex-row">
            <h1 className="text-white text-2xl ">Number of Users:</h1>
            <span className="text-yellow-500 text-2xl underline ms-2 text-center md:text-start">
              {users.length}
            </span>
          </div>
          <div className="flex flex-col md:flex-row">
            <h1 className="text-white text-2xl">Last User Resistered is :</h1>
            <span className="text-yellow-500 text-2xl underline ms-2 text-center md:text-start">
              {user.username}
            </span>
          </div>

          <Link to="/controluser">
            <button
              type="submit"
              className="mb-5 bg-transparent border-2 border-red-700 shadow--red-700 inline-block rounded font-bold  px-6 pb-2 pt-2.5 text-xs  uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-primary-2 focus:bg-red-700 focus:shadow-danger-2 focus:outline-none focus:ring-0  active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Show Users
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[85%]  bg-black rounded-2xl mt-32  mb-20">
        <div className="w-full  flex flex-col justify-center items-center gap-y-16">
          <h1 className="mt-5 text-4xl text-gray-500 font-bold">Products</h1>
          <div className="flex flex-col md:flex-row">
            <h1 className="text-2xl text-white">Number of Products: </h1>
            <span className="text-yellow-500 text-2xl underline ms-2 text-center md:text-start">
              {products.length}
            </span>
          </div>
          <div className="flex flex-col md:flex-row">
            <h1 className="text-2xl text-white">Last products Added is :</h1>
            {products.slice(-1).map((product, i) => (
              <span
                className="text-yellow-500 text-2xl underline ms-2 text-center md:text-start"
                key={i}
              >
                {product.category}
              </span>
            ))}
          </div>

          <Link to="/products">
            <button
              type="submit"
              className="mb-5 border-2 border-green-700 inline-block rounded bg-sucess px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-green-700 hover:shadow-primary-2 focus:hover:bg-green-700 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:hover:bg-green-700 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Show Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminControl;
