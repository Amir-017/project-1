import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const backAStep = () => {
    navigate(-1);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h1 className=" ms-10 text-center md:text-start text-3xl font-bold mb-4 mt-32 underline">
        About Products:
      </h1>

      <div className="flex justify-center items-center mt-20">
        <Link
          to="/products/addproduct"
          className="mb-2 block w-[100%] rounded bg-primary af px-7 md:px-32 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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
                      className=" me-3 inline-block rounded bg-secondary px-2 md:px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-black shadow-secondary-3 transition duration-150 ease-in-out hover:bg-secondary-accent-300 hover:shadow-secondary-2 focus:bg-secondary-accent-300 focus:shadow-secondary-2 focus:outline-none focus:ring-0 active:bg-secondary-600 active:shadow-secondary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    >
                      Edite{" "}
                    </button>
                  </Link>

                  <button
                    onClick={() => deletItem(product)}
                    type="button"
                    className="text-black me-2 inline-block rounded bg-warning px-0 md:px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal  shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full text-center my-10 ">
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
  );
};

export default Products;
