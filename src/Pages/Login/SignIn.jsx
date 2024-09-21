import axios from "axios";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Ripple, Input, initTWE } from "tw-elements";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignIn = ({ setGetUser }) => {
  const [users, setUsers] = useState([]);
  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });
  const [checkUser, setCheckUsers] = useState(true);
  const [changeBtn, setChangeBtn] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const getUsers = () => {
    Axios({
      method: "get",
      url: "http://localhost:3000/users",
    }).then((data) => setUsers(data.data));
  };

  useEffect(() => {
    initTWE({ Ripple, Input });
    getUsers();
  }, []);

  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();

    users.find((user) => {
      if (user.email == userSignIn.email) {
        axios({
          method: "post",
          url: "http://localhost:3000/user",
          data: user,
        });
        setGetUser(true);
      }
    });

    const findUser = users.find((user) => {
      return (
        user.email == userSignIn.email && user.password == userSignIn.password
      );
    });
    if (findUser) {
      if (localStorage.k) {
        setShowDiv(true);
      } else {
        navigate("/");
        if (userSignIn.email == "amer@gmail.com") {
          localStorage.k = "a";
        } else {
          if (findUser.gender == "male") {
            localStorage.k = "mm";
          } else {
            localStorage.k = "mw";
          }
        }
      }
    } else {
      setCheckUsers(false);
    }
  };

  const change = () => {
    setChangeBtn(!changeBtn);
  };

  const backAStep = () => {
    navigate(-1);
  };
  return (
    <div className="w-full  bg-red-50 mt-26  ">
      <div className=" flex justify-center items-center w-full    ">
        <div className=" mt-[8.4rem] mb-5  w-[18rem]    md:w-[24em] rounded-lg  p-[3.5rem]     flex flex-col justify-start items-start md:justify-center md:items-center ">
          <div
            className=" mb-12 flex flex-col justify-center items-center w-full"
            data-twe-input-wrapper-init
          >
            <label
              htmlFor="exampleInputEmail1"
              className={
                checkUser
                  ? "w-[83%] text-start pointer-events-none  left-3 top-0 mb-0  origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black  "
                  : "w-[83%] text-start pointer-events-none  left-3 top-0 mb-0  origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[red]   "
              }
            >
              {checkUser ? "Email address" : "Wrong Email address"}
            </label>
            <input
              value={userSignIn.email}
              onChange={(e) =>
                setUserSignIn({ ...userSignIn, email: e.target.value })
              }
              type="email"
              className="peer block min-h-[auto]  rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-black"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div
            className=" mb-6 flex flex-col justify-center items-center w-full"
            data-twe-input-wrapper-init
          >
            <label
              htmlFor="exampleInputPassword1"
              className={
                checkUser
                  ? "w-[83%] text-start pointer-events-none  left-3 top-0 mb-0  origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-black"
                  : "w-[83%] text-start pointer-events-none  left-3 top-0 mb-0  origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-black peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[red] dark:peer-focus:text-white"
              }
            >
              {checkUser ? "Password" : "Wrong Password"}
            </label>
            <input
              type={changeBtn ? "text" : "password"}
              value={userSignIn.password}
              onChange={(e) =>
                setUserSignIn({ ...userSignIn, password: e.target.value })
              }
              className="peer block min-h-[auto]  rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-900 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0 border-black"
              id="exampleInputPassword1"
              placeholder="Password"
            />

            <div className="relative text-end">
              <button
                type="onclick"
                onClick={change}
                className="text-black absolute left-[5em] bottom-[.7em]     "
              >
                {changeBtn ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
          </div>
          <div className="mb-6  min-h-[1.5rem] ps-[1.5rem] w-[80%] text-start ">
            <input
              className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid  outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-black checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-black checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary border-black"
              type="checkbox"
              value=""
              id="checkboxDefault"
            />
            <label
              className="inline-block ps-[0.15rem] hover:cursor-pointer text-black"
              htmlFor="checkboxDefault"
            >
              Remember Me
            </label>
          </div>

          {showDiv ? (
            <div className="w-full h-[5vh] bg-red-700 mb-5 flex justify-center items-center rounded-xl">
              <h1 className="text-black font-bold">
                Please Logout First and Try Again
              </h1>
            </div>
          ) : (
            ""
          )}

          <div className="flex  flex-col md:flex-row w-full  justify-center items-center ">
            <button
              onClick={(e) => handleForm(e)}
              type="submit"
              className="me-4 mb-5 md:mb-0  inline-block rounded bg-danger px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-danger-3 transition duration-150 ease-in-out hover:bg-danger-accent-300 hover:shadow-danger-2 focus:bg-danger-accent-300 focus:shadow-danger-2 focus:outline-none focus:ring-0 active:bg-danger-600 active:shadow-danger-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              Login
            </button>
            <div className="">
              <Link to="/signup">
                <button
                  type="submit"
                  className="  inline-block rounded bg-success px-10 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-success-3 transition duration-150 ease-in-out hover:bg-success-accent-300 hover:shadow-success-2 focus:bg-success-accent-300 focus:shadow-success-2 focus:outline-none focus:ring-0 active:bg-success-600 active:shadow-success-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Create New Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center pb-10 ">
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

export default SignIn;
