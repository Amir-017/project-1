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
    <div className="w-full h-screen flex justify-center items-center bg-secondary-700">
      <div className=" mx-auto   rounded-lg  p-6 ">
        <section className="rounded me-10   w-[35em] h-[30em] flex-col flex justify-center items-center ">
          <div className="relative mb-12" data-twe-input-wrapper-init>
            <label htmlFor="" className="text-white font-bold">
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
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputTitle"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label htmlFor="" className="text-white font-bold">
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
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputPrice"
              placeholder="Password"
            />
          </div>
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label htmlFor="" className="text-white font-bold">
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
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputDescription"
              placeholder="Password"
            />
          </div>
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label htmlFor="" className="text-white font-bold">
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
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputCategory"
              placeholder="Password"
            />
          </div>
          <div className="relative mb-6" data-twe-input-wrapper-init>
            <label htmlFor="" className="text-white font-bold">
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
              type="text"
              className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputCategory"
              placeholder="Password"
            />
          </div>
          <button
            onClick={handleForm}
            type="onclick"
            className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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
