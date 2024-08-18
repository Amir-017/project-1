import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({
    items: "1",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleForm = () => {
    axios({
      method: "post",
      url: "  http://localhost:3000/products",
      data: product,
    }).then((res) => {
      navigate("/products");
    });
  };
  return (
    <div className=" mt-24 w-full h-screen   my-5 flex justify-center items-center">
      <div className="w-[100%] h-screen bg-purple-500 rounded-2xl mx-10 flex justify-center items-center ">
        <section className="rounded    w-[20em] h-[30em]  flex-col flex justify-center items-center">
          <div className="relative mb-12" data-twe-input-wrapper-init>
            <label
              htmlFor=""
              className="text-white font-bold text-center md:text-start "
            >
              Title
            </label>

            <input
              value={product.title}
              onChange={(e) =>
                setProduct({
                  ...product,
                  title: e.target.value,
                })
              }
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 border-gray-950 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-500 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputTitle"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label
              htmlFor=""
              className="text-white font-bold text-center md:text-start "
            >
              Price
            </label>
            <input
              value={product.price}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: e.target.value,
                })
              }
              type="number"
              className="peer block min-h-[auto] w-full rounded border-2 border-gray-950 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-500 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputPrice"
              placeholder="Password"
            />
          </div>
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label
              htmlFor=""
              className="text-white font-bold text-center md:text-start "
            >
              Description
            </label>
            <input
              value={product.description}
              onChange={(e) =>
                setProduct({
                  ...product,
                  description: e.target.value,
                })
              }
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 border-gray-950 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-500 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputDescription"
              placeholder="Password"
            />
          </div>
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label
              htmlFor=""
              className="text-white font-bold text-center md:text-start "
            >
              Category
            </label>
            <input
              value={product.category}
              onChange={(e) =>
                setProduct({
                  ...product,
                  category: e.target.value,
                })
              }
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 border-gray-950 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-500 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputCategory"
              placeholder="Password"
            />
          </div>
          <div className=" mb-6 w-60" data-twe-input-wrapper-init>
            <label
              htmlFor=""
              className="text-white font-bold text-center md:text-start "
            >
              Image
            </label>
            <input
              value={product.image}
              onChange={(e) =>
                setProduct({
                  ...product,
                  image: e.target.value,
                })
              }
              type="file"
              className="peer block  w-full  rounded border-2 border-gray-950 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-500 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputCategory"
              placeholder="Password"
            />
          </div>
          <button
            onClick={handleForm}
            type="onclick"
            className="text-black inline-block rounded bg-transparent border-2 border-success-500 hover:bg-success-500  px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out  hover:shadow focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            Add Product
          </button>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;
