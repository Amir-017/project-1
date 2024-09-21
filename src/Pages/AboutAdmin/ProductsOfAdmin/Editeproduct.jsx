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
    axios({
      method: "patch",
      url: `http://localhost:3000/products/${id}`,
      data: product,
    }).then((res) => {
      navigate("/products");
    });
  };
  const backAStep = () => {
    navigate(-1);
  };
  return (
    <div className=" w-full h-screen flex flex-col justify-center items-center  mt-32 mb-5 ">
      <div className="  w-[100%] h-screen bg-purple-500 rounded-2xl mx-10 flex flex-col justify-center items-center">
        <section className="rounded     md:w-[35em] h-[30em] flex-col flex justify-center items-center ">
          <div className="relative mb-6" data-twe-input-wrapper-init>
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
              className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-950 dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
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
              className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-950 dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
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
              className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-950 dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
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
              className="peer block min-h-[auto] w-full rounded border-2 border-black bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-gray-950 dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-black [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleInputCategory"
              placeholder="Password"
            />
          </div>
          <button
            onClick={editeItems}
            type="onclick"
            className="text-black inline-block rounded bg-transparent border-2 border-success-500 hover:bg-success-500  px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out  hover:shadow focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            Edite Product
          </button>
        </section>
        <div className="w-full text-center pt-10 me-5 ">
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
    </div>
  );
};

export default Editeproduct;
