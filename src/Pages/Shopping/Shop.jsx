import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ products, setProduct, product, setcheckProduct }) => {
  const sendProduct = (prod) => {
    setProduct([...product, prod]);
  };
  // console.log(products);
  return (
    <div className="w-full ">
      <div className="    grid grid-cols-4 justify-center items-center ">
        {products.map((product, i) => (
          <div key={i} className="block rounded-lg  w-[50%] mt-10">
            <a href="#!">
              <img className="rounded-t-lg" src={product.image} alt="" />
            </a>
            <div className=" text-surface dark:text-dark">
              <h5 className="mb-2 text-xl font-bold leading-tight">
                {product.category}
              </h5>
              <p className="mb-4 font-bold">{product.price}$</p>
            </div>
            <Link
              onClick={() => sendProduct(product)}
              className=" font-bold  text-[green] underline"
            >
              Add To Cart
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
