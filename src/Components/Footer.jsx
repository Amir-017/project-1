import React, { useEffect } from "react";
import icons from "/src/Photos/تنزيل.png";
import { Input, initTWE } from "tw-elements";

const Footer = () => {
  useEffect(() => {
    initTWE({ Input });
  }, []);
  return (
    <footer className=" bg-zinc-50 text-center text-surface/75 dark:bg-black dark:text-white/75 lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                </svg>
              </span>
              Male fashion
            </h6>
            <p>
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <img src={icons} className="mt-10" />
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              SHOPPING
            </h6>
            <p className="mb-4">
              <a href="#!">Home </a>
            </p>
            <p className="mb-4">
              <a href="#!">Shop </a>
            </p>
            <p className="mb-4">
              <a href="#!">About Us </a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!">Pricing</a>
            </p>
            <p className="mb-4">
              <a href="#!">Settings</a>
            </p>
            <p className="mb-4">
              <a href="#!">Orders</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              NEWLETTER
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              Be the first to know about new arrivals, look books, sales &
              promos!
            </p>
          </div>
        </div>
      </div>
      <hr />

      <div className="bg-black/5 p-6 text-center">
        <span>© 2023 Copyright</span>
      </div>
    </footer>
  );
};

export default Footer;
