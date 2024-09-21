import React, { useEffect, useState } from "react";
import empty from "/src/Photos/empty-shopping.a10c4f68e1ba633358c1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
const AboutShop = ({ product, checkproduct, setProduct, num, setNum }) => {
  const incress = (prod) => {
    // console.log(prod);
    const incressProduct = product.map((product) => {
      if (product == prod) {
        product.items++;
      }
      return product;
    });
    setProduct(incressProduct);
    setNum((num += 1));
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
    setNum((num -= 1));
  };

  const del = (prod) => {
    const deProduct = product.filter((product) => {
      if (product.id !== prod.id) {
        return product;
      }
    });
    setProduct(deProduct);
    setNum(num - prod.items);
  };
  const navigate = useNavigate();
  const backAStep = () => {
    navigate(-1);
  };
  return (
    <div className="w-full  ">
      {product.length == 0 ? (
        <div className=" w-full ">
          <div className="flex justify-center lg:justify-evenly flex-col lg:flex-row items-center">
            <div className="h-1/4 md:h-1/2 lg:h-[100vh] w-[100%] mt-20 flex justify-center lg:justify-end  ">
              <div className="w-[70%] h-[25%] text-black bg-slate-200 flex justify-center items-start  flex-col gap-4 font-bold mt-10 rounded-2xl">
                <h1 className="ms-5 text-2xl mt-5">CART TOTAL</h1>
                <h1 className="ms-5 text-2xl">0$</h1>
                <div className=" w-full   text-white flex justify-center items-center mb-5 ">
                  <button className="w-[80%] h-[50px] bg-black rounded-2xl">
                    Pay
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col">
              <img src={empty} width="40%" />

              <Link to="/shop">
                <button
                  type="button"
                  className="inline-block rounded bg-success px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong mb-5"
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-full  h-[1/2] mt-10">
          <div className="flex justify-end items-center me-10 ">
            <div className="h-1/2 lg:h-1/2 w-[100%] mt-20 flex justify-center lg:justify-end  ">
              <div className="w-[50%] h-[25%] text-black bg-slate-200 flex justify-center items-start  flex-col gap-4 font-bold mt-10 rounded-2xl">
                <h1 className="ms-5 text-2xl mt-5">CART TOTAL</h1>
                <h1 className="ms-5 text-2xl">
                  {product
                    .map((prod, i) => prod.items * prod.price)
                    .reduce((a, b) => a + b)}
                  $
                </h1>
                <div className=" w-full   text-white flex justify-center items-center mb-5 ">
                  <button className="w-[80%] h-[50px] bg-black rounded-2xl">
                    Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
          {product.map((prod, i) => (
            <div
              className="container mx-auto    flex flex-col md:flex-row justify-center md:justify-between lg:justify-evenly "
              key={i}
            >
              <div className="w-full   md:w-3/4  mt-10">
                <div className=" flex flex-col md:flex-row justify-start items-center md:h-[20%]  font-bold text-none md:text-2xl mb-10">
                  <img
                    src={prod.image}
                    className="rouded-full h-[90px] w-[90px] "
                  />
                  <div className="flex flex-col md:flex-row">
                    <h1 className="me-10 ms-10">{prod.title}</h1>
                    <h1 className="text-center md:text-start">{prod.price}</h1>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-0 md:justify-evenly items-center mb-3 font-normal md:font-bold text-2xl">
                  <button
                    onClick={() => incress(prod)}
                    type="submit"
                    className="me-4 inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-danger-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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
                      className=" me-4 inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      decrement
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="pointer-events-none inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 disabled:opacity-70 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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

                <hr className="w-[100%]    border-t-4 rounded border-t-black " />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="w-full text-center mb-5 ">
        <button
          onClick={backAStep}
          type="button"
          className="inline-block bg-blue-400 rounded border-2 border-info px-16 pb-[10px] pt-2 text-xs font-bold uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-info-600 hover:bg-info-50/50 hover:text-white focus:border-info-600 focus:bg-info-50/50 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 motion-reduce:transition-none dark:hover:bg-cyan-950 dark:focus:bg-cyan-950"
          data-twe-ripple-init
        >
          Back A Step
        </button>
      </div>
    </div>
  );
};

export default AboutShop;
