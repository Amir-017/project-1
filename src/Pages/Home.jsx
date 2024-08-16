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
      <div
        className="  bg-cover bg-no-repeat bg-center   w-full h-screen"
        style={{
          backgroundImage:
            'url("./src/Photos/hero-1.c081bcff664751bf4f02.jpg")',
        }}
      >
        <div className="container mx-auto flex flex-col justify-center items-start h-screen ">
          <div className="">
            <h1 className="text-orange-500  font-bold text-2xl">
              SUMMER COLLECTION
            </h1>
            <h1 className="text-5xl ">Fall - Winter</h1>
            <h1 className="text-5xl ">Collections 2023</h1>
          </div>

          <div className="text-start mt-5 text-gray-700">
            <p>A specialist label creating luxury essentials.</p>
            <p>Ethically crafted with an unwavering commitment </p>
            <p>to exceptional quality.</p>
            <button
              type="button"
              className="font-bold mt-10  inline-block rounded bg-primary px-[10rem] pb-4 pt-4 text-xs  uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="w-full flex justify-evenly flex-col md:flex-row ">
          <div className="  flex flex-col justify-center items-center mb-5 md:mb-0 ">
            <h1 className=" font-bold text-4xl text-slate-500">Clothing</h1>
            <h1 className=" font-bold text-4xl text-slate-500">
              Collection 2023
            </h1>
            <Link className="text-gray-700  text-end font-bold  hover:text-[black] hover:underline  ">
              Shop Now
            </Link>
          </div>
          <div className="w-full flex justify-center items-center md:w-[50%]">
            <img
              src={blov}
              className="rounded-2xl w-[40%] md:w-[100%] lg:w-[80%]"
            />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full flex flex-col lg:flex-row gap-x-10 justify-center lg:justify-evenly  mt-5">
        <div className="flex flex-col text-center  mb-5">
          <div className="w-full flex justify-center items-center  lg:w-[100%]">
            <img
              src={glases}
              className="rounded-2xl w-[40%] md:w-[50%] lg:w-[100%] "
            />
          </div>
          <h1 className="text-3xl font-bold text-slate-500">Accessories</h1>
          <Link className="text-gray-700   font-bold  hover:text-[black] hover:underline text-center  ">
            Shop Now
          </Link>{" "}
        </div>
        <div className="flex flex-col text-center  ">
          <div className="w-full flex justify-center items-center  lg:w-[100%]">
            <img
              src={shoes}
              className="rounded-2xl w-[40%] md:w-[50%] lg:w-[100%] "
            />
          </div>
          <h1 className="text-3xl font-bold text-slate-500">
            Shoes Spring 2023
          </h1>
          <Link className="text-gray-700   font-bold  hover:text-[black] hover:underline text-center  ">
            Shop Now
          </Link>{" "}
        </div>
      </div>
      {/*    */}
      <div className="w-full flex justify-center items-center h-[10vh] mt-10 bg-mySmBg mb-10 ">
        <h1 className="text-3xl text-white font-bold italic">
          Free shipping, 30-day return or refund guarantee.
        </h1>
      </div>

      {/*  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10  container mx-auto ">
        <div className="w-full flex flex-col justify-center items-center md:w-[90%] lg:w-full ">
          <img
            src={clothes1}
            className="rounded-2xl w-[70%] md:w-[90%] lg:w-full"
          />
          <h1 className="text-3xl mt-3 font-bold text-start">0$</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:w-[90%] lg:w-full ">
          <img
            src={shirt}
            className=" rounded-2xl w-[70%] md:w-[90%] lg:w-full"
          />
          <h1 className="mt-3 text-3xl font-bold">150$</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:w-[90%] lg:w-full ">
          <img
            src={clothes2}
            className="rounded-2xl w-[70%] md:w-[90%] lg:w-full"
          />
          <h1 className="mt-3 text-3xl font-bold">600$</h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center md:w-[90%] lg:w-full ">
          <img
            src={bantalon}
            className="rounded-2xl  w-[70%] md:w-[90%] lg:w-full"
          />
          <h1 className="mt-3 text-3xl font-bold">300$</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
