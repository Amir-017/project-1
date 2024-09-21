import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import Swal from "sweetalert2";
import boy from "/src/Photos/th.jpg";
import girl from "/src/Photos/avatar-woman.jpg";
import { TbHexagonLetterM } from "react-icons/tb";
import { GiClothespin } from "react-icons/gi";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const Header = ({ num }) => {
  useEffect(() => {
    initTWE({ Collapse, Dropdown });
  }, []);

  const navigate = useNavigate();

  const clear = () => {
    Swal.fire({
      position: "center",
      color: "red",
      title: "You Logged Out",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      localStorage.clear();

      navigate("/");
    });
  };

  return (
    <div className="">
      <nav
        className=" fixed top-0 flex w-full   justify-between  py-2 text-neutral-500 shadow-dark-mild hover:text-neutral-700 focus:text-neutral-700 dark:bg-gray-800 lg:flex-wrap lg:justify-start lg:py-4"
        data-twe-navbar-ref
      >
        <div className="  w-full flex  flex-wrap items-center justify-between px-3">
          <div className="w-[75%] lg:w-[95%]">
            <a className="text-xl text-black dark:text-white" href="/">
              <h1 className="relative lg:ms-16 text-xl md:text-2xl font-bold text-dark text-italic flex lg:justify-center md:justify-start ">
                <TbHexagonLetterM className=" md:mt-0 text-2xl md:text-4xl" />
                ale Fashion{" "}
              </h1>
            </a>
          </div>
          <button
            className=" me-5 block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent3"
            aria-controls="navbarSupportedContent3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className=" mt-2 hidden flex-grow  items-center lg:mt-0 lg:!flex lg:basis-auto"
            id="navbarSupportedContent3"
            data-twe-collapse-item
          >
            <div
              className=" list-style-none  flex justify-start items-start flex-col  mx-7 lg:mt-1 md:flex-row md:justify-evenly lg:w-full"
              data-twe-navbar-nav-ref
            >
              <div className="font-bold mb-5     lg:1/4 text-end md:text-center lg:text-start links	">
                <Link
                  className="me-3 ms-0 lg:ms-14 text-gray-500 hover:underline hover:text-[white]"
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className=" me-3 text-gray-500 hover:underline hover:text-[white]"
                  to="/shop"
                >
                  Shop
                </Link>
              </div>
              <div
                className="mt-7 md:mt-0 mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 flex lg:w-[50%] justify-start md:justify-center lg:justify-end"
                data-twe-nav-item-ref
              >
                <div className="flex justify-evenly fw-bolder w-1/4 ">
                  {localStorage.k == "a" ? (
                    <div className="flex">
                      <div
                        className="relative"
                        data-twe-dropdown-ref
                        data-twe-dropdown-alignment="end"
                      >
                        <div
                          className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                          id="dropdownMenuButton2"
                          role="button"
                          data-twe-dropdown-toggle-ref
                          aria-expanded="false"
                        >
                          <img
                            as={Link}
                            src={boy}
                            className="rounded-full w-[35px] h-[35px]"
                            loading="lazy"
                          />
                        </div>
                        <ul
                          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                          aria-labelledby="dropdownMenuButton2"
                          data-twe-dropdown-menu-ref
                        >
                          <Link
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                            to="/profile"
                            data-twe-dropdown-item-ref
                          >
                            Profile
                          </Link>
                          <Link
                            to="/admincontrol"
                            className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                            data-twe-dropdown-item-ref
                          >
                            Control
                          </Link>

                          <li>
                            <Link
                              className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                              onClick={clear}
                              data-twe-dropdown-item-ref
                            >
                              Log-Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : localStorage.k == "mm" || localStorage.k == "mw" ? (
                    <div className="flex">
                      <div
                        className="relative"
                        data-twe-dropdown-ref
                        data-twe-dropdown-alignment="end"
                      >
                        <div
                          className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                          id="dropdownMenuButton2"
                          role="button"
                          data-twe-dropdown-toggle-ref
                          aria-expanded="false"
                        >
                          <img
                            as={Link}
                            src={localStorage.k == "mm" ? boy : girl}
                            className="rounded-full w-[35px] h-[35px]"
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <ul
                          className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                          aria-labelledby="dropdownMenuButton2"
                          data-twe-dropdown-menu-ref
                        >
                          <li>
                            <Link
                              className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                              to="/profile"
                              data-twe-dropdown-item-ref
                            >
                              Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                              onClick={clear}
                              data-twe-dropdown-item-ref
                            >
                              Log-Out
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link to="/signin">
                      <CiLogout className="text-3xl text-white " />
                    </Link>
                  )}
                </div>
                <div
                  className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
                  data-twe-nav-link-ref
                >
                  <div className="flex relative me-5">
                    <Link to={`/aboutshop`}>
                      <FaLock className="text-2xl  mt-1 text-white" />
                    </Link>

                    <h1 className="bg-[red] text-white rounded-full w-[25px] h-[25px] text-center absolute bottom-[17px] left-[15px]">
                      {num}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
