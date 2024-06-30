import React, { useEffect } from "react";
import blov from "/src/Photos/banner-1.45fe2b268cef81900571.jpg";
import shoes from "/src/Photos/banner-3.902e072bfedc4a1cabdf.jpg";
import glases from "/src/Photos/banner-2.09aec17ea3a36d2e2a44 - Copy.jpg";
import clothes1 from "/src/Photos/1.51632eafdeaa828f5207.jpg";
import shirt from "/src/Photos/2.0654d29911db1fb90896.jpg";
import clothes2 from "/src/Photos/3.1077aed96e883e0a7a00.jpg";
import bantalon from "/src/Photos/4.4376b13ee596258fb3ac.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="">
      <div className=" flex flex-col justify-center    bg-myBg w-full h-screen">
        <div className="   w-[40%]   ms-10 ">
          <div className="">
            <h1 className="text-orange-500  font-bold text-2xl">
              SUMMER COLLECTION
            </h1>
            <h1 className="text-5xl ">Fall - Winter</h1>
            <h1 className="text-5xl ">Collections 2023</h1>
          </div>

          <div className="text-start mt-5">
            <p>A specialist label creating luxury essentials.</p>
            <p>Ethically crafted with an unwavering commitment </p>
            <p>to exceptional quality.</p>
            <button
              type="button"
              className="mt-10  inline-block rounded bg-primary px-[10rem] pb-4 pt-4 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="w-full flex justify-between ">
          <div className="  flex flex-col justify-center w-1/4 ms-[30em]">
            <h1 className=" font-bold text-4xl text-slate-500">Clothing</h1>{" "}
            <h1 className=" font-bold text-4xl text-slate-500">
              Collection 2023
            </h1>
            <Link className="text-end font-bold  hover:text-[red] hover:underline w-[46%] ">
              Shop Now
            </Link>
          </div>

          <img src={blov} className="me-10" />
        </div>
      </div>
      {/*  */}
      <div className="w-full flex justify-between  items-center">
        <div className="flex flex-col text-center">
          <img src={glases} className="ms-[8em]" />
          <h1 className="text-3xl font-bold text-slate-500">Accessories</h1>
          <Link className="text-end font-bold  hover:text-[red] hover:underline w-[50%] ms-10">
            Shop Now
          </Link>
        </div>
        <div className="flex flex-col text-center">
          <img src={shoes} className="me-[8em]" />
          <h1 className="text-3xl font-bold text-slate-500">
            Shoes Spring 2023
          </h1>
          <Link className="text-end font-bold  hover:text-[red] hover:underline w-[50%] me-10">
            Shop Now
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="w-full flex justify-center items-center h-[10vh] mt-10 bg-mySmBg mb-10 ">
        <h1 className="text-3xl text-white font-bold italic">
          Free shipping, 30-day return or refund guarantee.
        </h1>
      </div>

      {/*  */}
      <div className="w-full grid grid-cols-4 gap-10 mb-10 ">
        <div className="">
          <img src={clothes1} width="80%" />
          <h1 className="text-3xl mt-3 font-bold">$</h1>
        </div>
        <div className="">
          <img src={shirt} width="80%" />
          <h1 className="mt-3 text-3xl font-bold">150$</h1>
        </div>
        <div className="">
          <img src={clothes2} width="80%" />
          <h1 className="mt-3 text-3xl font-bold">600$</h1>
        </div>
        <div className="">
          <img src={bantalon} width="80%" />
          <h1 className="mt-3 text-3xl font-bold">300$</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
