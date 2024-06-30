import React, { useEffect, useState } from "react";
import { FaLock } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import Swal from "sweetalert2";
import boy from "/src/Photos/th.jpg";
import girl from "/src/Photos/avatar-woman.jpg";
const Header = () => {
  const [num, setNum] = useState(0);

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
    <nav className="w-full fixed flex   items-center justify-between py-2 shadow-dark-mild  bg-slate-100 lg:py-4 ">
      <div className=" ms-10 flex justify-evenly items-center w-full ">
        <h1 className="w-[27%] text-2xl font-bold text-dark text-italic ">
          Male Fashion
        </h1>
        <div className="font-bold w-1/4 text-start links	">
          <Link className="me-3 ms-14 hover:underline hover:text-[red]" to="/">
            Home
          </Link>
          <Link className="hover:underline hover:text-[red]" to="/shop">
            Shop
          </Link>
        </div>
        {/* icons */}

        <div className="flex justify-evenly fw-bolder w-1/4 ">
          <div className="flex relative">
            <Link to={`/aboutshop`}>
              <FaLock className="text-2xl  mt-1" />
            </Link>

            <h1 className="bg-[red] rounded-full w-[25px] h-[25px] text-center absolute bottom-[17px] left-[15px]">
              {num}
            </h1>
          </div>

          {localStorage.k == "a" ? (
            <div className="flex">
              <div
                className="relative"
                data-twe-dropdown-ref
                data-twe-dropdown-alignment="end"
              >
                <Link
                  className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  id="dropdownMenuButton2"
                  role="button"
                  data-twe-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  <img
                    src={boy}
                    className="rounded-full w-[35px] h-[35px]"
                    loading="lazy"
                  />
                </Link>
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
                <a
                  className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  id="dropdownMenuButton2"
                  role="button"
                  data-twe-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  <img
                    src={localStorage.k == "mm" ? boy : girl}
                    className="rounded-full w-[35px] h-[35px]"
                    alt=""
                    loading="lazy"
                  />
                </a>
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
              <CiLogout className="text-2xl text-gray-700" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
