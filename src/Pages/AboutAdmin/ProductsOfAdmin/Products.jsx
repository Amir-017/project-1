import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const Products = () => {
  const [products, setproducts] = useState([]);

  // console.log(users);

  const getProducts = () => {
    axios({
      method: "get",
      url: "  http://localhost:3000/products",
    }).then((data) => setproducts(data.data));
  };
  useEffect(() => {
    getProducts();
  }, []);
  const deletItem = (prod) => {
    Swal.fire({
      title: "Do you want to delete items?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      // console.log(result);
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:3000/products/${prod.id}`,
        }).then((res) => {
          getProducts();
        });
      }
    });
  };

  return (
    <div className="w-full ">
      <h1 className=" text-center text-2xl font-bold mb-4">About Products</h1>

      <div className="flex justify-center items-center mt-20">
        <button
          type="button"
          className="mb-2 block w-[50%] rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          <Link to="/products/addproduct"> Add New Items</Link>
        </button>
      </div>

      <div className=" mx-10">
        <div className=" flex flex-col ">
          <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className=" inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className=" min-w-full text-left text-sm font-light text-surface dark:text-white bg-black">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Id
                      </th>
                      <th scope="col" className="px-6 py-4 text-center">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-4 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, i) => (
                      <tr
                        className="border-b border-neutral-200 dark:border-white/10 italic"
                        key={i}
                      >
                        <td className=" px-6 py-4 font-medium">{product.id}</td>
                        <td className=" px-6 py-4 font-medium text-center">
                          {product.title}
                        </td>
                        <td className=" px-6 py-4 font-medium flex justify-evenly ">
                          <button
                            type="submit"
                            className=" me-3 inline-block rounded bg-secondary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          >
                            <Link to={`/products/${product.id}`}>Edite</Link>
                          </button>
                          <button
                            onClick={() => deletItem(product)}
                            type="button"
                            className="inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

// import React from "react";

// const Products = () => {
//   return <div>Products</div>;
// };

// export default Products;
