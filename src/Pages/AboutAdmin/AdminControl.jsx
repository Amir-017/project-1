import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AdminControl = ({ products, users, user }) => {
  return (
    <div className=" w-full h-screen grid  grid-cols-2 justify-items-center items-center">
      <div className=" w-[85%] h-[50%] bg-black rounded  ">
        <div className="w-full h-[100%] flex flex-col justify-center items-center gap-y-16">
          <h1 className="text-4xl text-[blue]">Users</h1>
          <h1 className="text-white text-2xl">
            Number of Users:
            <span className="text-[yellow]">{users.length}</span>
          </h1>
          <h1 className="text-white text-2xl">
            Last User Resistered is :
            <span className="text-[yellow]">{user.username}</span>
          </h1>
          <Link to="/controluser">
            <button
              type="submit"
              className=" inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Show Users
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[85%] h-[50%] bg-black rounded">
        <div className="w-full h-[100%] flex flex-col justify-center items-center gap-y-16">
          <h1 className="text-4xl text-[blue]">Products</h1>
          <h1 className="text-2xl text-white">
            Number of Products:{" "}
            <span className="text-[yellow]">{products.length}</span>
          </h1>
          <h1 className="text-2xl text-white">
            Last products Added is :
            {products.slice(-1).map((product, i) => (
              <span className="text-[yellow]" key={i}>
                {product.category}
              </span>
            ))}
          </h1>
          <Link to="/products">
            <button
              type="submit"
              className=" inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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
