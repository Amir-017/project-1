import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ products, setProduct, product, setcheckProduct }) => {
  const sendProduct = (prod) => {
    setProduct([...product, prod]);
  };
  // console.log(products);
  return (
    <div className="w-full  bg-white">
      <div className="w-[70%] md:w-[90%] bg-gray-300 rounded-xl px-20 container mx-auto mb-10 pt-10 pb-10 ">
        <div className="    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center  ">
          {products.map((product, i) => (
            <div
              key={i}
              className="flex justify-center items-center flex-col   mt-10   mx-10  border-2 bg-white w-full rounded-2xl gap-10 "
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
              <div className=" text-surface dark:text-dark ">
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
    </div>
  );
};

export default Shop;
