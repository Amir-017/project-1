import React, { useEffect, useState } from "react";
import empty from "/src/Photos/empty-shopping.a10c4f68e1ba633358c1.jpg";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
const AboutShop = ({ product, checkproduct, setProduct }) => {
  const incress = (prod) => {
    // console.log(prod);
    const incressProduct = product.map((product) => {
      if (product == prod) {
        product.items++;
        // console.log(product.price * product.items);
      }
      return product;
    });
    setProduct(incressProduct);     
  };
  const decress = (prod, t) => {
    const decressProduct = product.map((product) => {
      if (product == prod) {
        if (product.items > 1) {
          product.items--;
        }
      }
      return product;
    });
    setProduct(decressProduct);
  };

  const del = (prod) => {
    const deProduct = product.filter((product) => {
      if (product.id !== prod.id) {
        return product;
      }
    });
    setProduct(deProduct);
  };

  return (
    <div className="w-full  flex justify-evenly">
      {product.length == 0 ? (
        <div className=" w-full ">
          <div className="flex justify-evenly items-center">
            <div className="flex justify-center items-center flex-col">
              <img src={empty} width="40%" />

              <Link to="/shop">
                <button
                  type="button"
                  className="  inline-block rounded bg-success text-white px-6 pb-2 pt-2.5 text-xs font-medium "
                >
                  SHOP NOW
                </button>
              </Link>
            </div>
            <div className="h-screen w-[50%] mt-10">
              <div className="w-[70%] h-[25%] text-black bg-slate-200 flex justify-center items-start  flex-col gap-4 font-bold mt-10">
                <h1 className="ms-5 text-2xl">CART TOTAL</h1>
                <h1 className="ms-5 text-2xl">0$</h1>
                <div className="bg-black w-[90%] h-[50px] ms-4 text-white flex justify-center items-center">
                  <h1>Pay</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-full  h-[1/2] mt-10">
          <div className="flex justify-end items-center me-10 ">
            <div className="w-[30%] h-[30%] text-black bg-slate-200 flex justify-center items-start  flex-col gap-6 font-bold mt-10">
              <h1 className="ms-5 text-2xl">CART TOTAL</h1>
              <h1 className="ms-5 text-2xl">
                {
                  product
                    .map((prod, i) => prod.items * prod.price)
                    .reduce((a, b) => a + b)

                  //
                }
                $
              </h1>
              <div className="bg-black w-[90%] h-[50px] ms-4 text-white flex justify-center items-center">
                <h1>Pay</h1>
              </div>
            </div>
          </div>
          {product.map((prod, i) => (
            <div className="    flex justify-between " key={i}>
              <div className=" w-3/4  mt-10">
                <div className="flex justify-start items-center h-[20%] ms-[5rem] font-bold text-2xl mb-10">
                  <img
                    src={prod.image}
                    className="rouded-full h-[90px] w-[90px] "
                  />
                  <h1 className="me-10 ms-10">{prod.title}</h1>
                  <h1>{prod.price}</h1>
                </div>
                {/*  */}
                <div className="flex justify-evenly items-center mb-3 font-bold text-2xl">
                  <button
                    onClick={() => incress(prod)}
                    type="submit"
                    className="me-4 inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    increment
                  </button>
                  <h1>{prod.items}</h1>
                  {prod.items > 1 ? (
                    <button
                      onClick={(t) => decress(prod, t)}
                      type="submit"
                      className=" me-4 inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      decrement
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="pointer-events-none inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 disabled:opacity-70 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      disabled
                    >
                      decrement
                    </button>
                  )}

                  <h1>{prod.price * prod.items}</h1>
                  <button onClick={() => del(prod)}>
                    <AiFillDelete />
                  </button>
                </div>

                <hr className="w-[82%]  ms-[5em]" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutShop;
