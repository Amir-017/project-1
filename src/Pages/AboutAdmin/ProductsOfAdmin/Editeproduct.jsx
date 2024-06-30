import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Editeproduct = () => {
  const [product, setProduct] = useState(null);
  const getProduct = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/products/${id}`,
    }).then((data) => setProduct(data.data));
  };
  useEffect(() => {
    getProduct();
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(product);

  const editeItems = () => {
    // console.log("hello");
    axios({
      method: "patch",
      url: `http://localhost:3000/products/${id}`,
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
              value={product ? product.title : ""}
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
              value={product ? product.price : ""}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: e.target.value,
                })
              }
              type="text"
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
              value={product ? product.description : ""}
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
              value={product ? product.category : ""}
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
          <button
            onClick={editeItems}
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

export default Editeproduct;
