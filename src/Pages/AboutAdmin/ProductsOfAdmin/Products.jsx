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
      <h1 className="ms-10 text-center md:text-start text-3xl font-bold mb-4 mt-20 underline">
        About Products:
      </h1>

      <div className="flex justify-center items-center mt-20">
        <Link
          to="/products/addproduct"
          className="mb-2 block w-[50%] rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          <button type="button" className="text-center w-[100%]">
            Add New Items{" "}
          </button>
        </Link>
      </div>

      <div className=" mx-10 my-10 flex justify-center items-center">
        <table className="rounded-2xl min-w-full text-left text-sm font-light text-surface dark:text-white bg-black">
          <thead className="border-b border-neutral-200 font-bold dark:border-white/10">
            <tr>
              <th scope="col" className="px-2 md:px-6 py-4">
                Id
              </th>
              <th
                scope="col"
                className="px-2 md:px-6 py-4 text-start md:text-center"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-2 md:px-6 py-4 text-start md:text-center"
              >
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
                <td className=" px-2 md:px-6 py-4 font-bold">{product.id}</td>
                <td className=" px-2 md:px-6 py-4 font-bold text-start md:text-center">
                  {product.title}
                </td>
                <td className=" px-0 md:px-6 py-4 font-bold flex flex-col md:flex-row justify-start md:justify-evenly  gap-y-3 ">
                  <Link to={`/products/${product.id}`}>
                    <button
                      type="submit"
                      className=" me-3 inline-block rounded bg-secondary px-0 md:px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    >
                      Edite{" "}
                    </button>
                  </Link>

                  <button
                    onClick={() => deletItem(product)}
                    type="button"
                    className="text-black me-2 inline-block rounded bg-warning px-0 md:px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal  shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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
  );
};

export default Products;
