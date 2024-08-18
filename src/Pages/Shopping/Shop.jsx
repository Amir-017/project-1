import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Shop = ({ products, setProduct, product, setcheckProduct }) => {
  const sendProduct = (prod) => {
    setProduct([...product, prod]);
  };
  const navigate = useNavigate();
  const backAStep = () => {
    navigate(-1);
  };

  return (
    <div className="w-full  bg-white">
      <div className="w-[70%] md:w-[90%] bg-gray-300 rounded-xl px-20 container mx-auto mb-10 pt-10 pb-10 ">
        <div className="    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center  ">
          {products.map((product, i) => (
            <div
              key={i}
              className="mx-20 flex justify-center items-center flex-col   mt-10     border-2 bg-white w-full rounded-2xl gap-10 "
            >
              <a href="#!">
                <div className="w-full flex justify-center items-center rounded-full ">
                  <img
                    className="w-[70%] md:w-[70%] mt-10 rounded-full  "
                    src={product.image}
                    alt=""
                  />
                </div>
              </a>
              <div className=" text-surface dark:text-dark text-center ">
                <h5 className="mb-2 text-xl font-bold ">{product.category}</h5>
                <p className="mb-4 text-xl">{product.price}$</p>
              </div>
              <Link
                onClick={() => sendProduct(product)}
                className=" font-bold text-gray-500   hover:text-black hover:underline"
              >
                Add To Cart
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full text-center my-10 ">
        <button
          onClick={backAStep}
          type="button"
          class="inline-block bg-blue-400 rounded border-2 border-info px-16 pb-[10px] pt-2 text-xs font-bold uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-info-600 hover:bg-info-50/50 hover:text-white focus:border-info-600 focus:bg-info-50/50 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 motion-reduce:transition-none dark:hover:bg-cyan-950 dark:focus:bg-cyan-950"
          data-twe-ripple-init
        >
          Back A Step
        </button>
      </div>
    </div>
  );
};

export default Shop;
