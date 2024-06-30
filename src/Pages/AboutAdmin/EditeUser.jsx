import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditeUser = () => {
  const [user, setUser] = useState(null);

  const { editeid } = useParams();
  const navigate = useNavigate();
  const comeUser = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/users/${editeid}`,
    }).then((data) => setUser(data.data));
  };

  useEffect(() => {
    comeUser();
  }, []);

  const edite = () => {
    axios({
      method: "patch",
      url: `http://localhost:3000/users/${editeid}`,
      data: user,
    }).then((res) => {
      axios({
        method: "patch",
        url: `http://localhost:3000/user`,
        data: user,
      }).then((res) => {
        setTimeout(() => {
          navigate("/controluser");
        }, 1000);
      });
    });
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[5em] flex flex-col items-start justify-center mt-10 mb-5 ms-20">
        <h1 className="italic font-bold text-3xl ">
          My Profile Ready To Change...
        </h1>
        <hr className="w-full " />
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="w-3/4 relative mb-3" data-twe-input-wrapper-init>
          <label htmlFor="exampleFormControlInputUsername">UserName</label>
          <input
            value={!user ? "" : user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type="tel"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputUsername"
            placeholder="Example label"
          />
        </div>
        <div className="container flex justify-center me-[60em]">
          <p className="mb-10 text-neutral-400">change Your Username</p>
        </div>
        {/*  */}
        <div className="w-3/4 relative mb-3" data-twe-input-wrapper-init>
          <label htmlFor="exampleFormControlInputEmail">Email</label>
          <input
            value={!user ? "" : user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="tel"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputEmail"
            placeholder="Example label"
          />
        </div>
        <div className="container flex justify-center me-[39em]">
          <p className="mb-10 text-neutral-400">
            once you change your mail you have to re-confirm it from your mail
            box.
          </p>
        </div>
        {/*  */}
        <div className="w-3/4 relative mb-3">
          <label htmlFor="exampleFormControlInputPassword">Password</label>
          <input
            value={!user ? "" : user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="tel"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputPassword"
            placeholder="Example label"
          />
        </div>
        <div className="container ms-[24rem] text-neutral-400 mb-8">
          <p className="">Your new password shall be more than 6 characters</p>
        </div>
        {/*  */}
        <div className="w-3/4 relative mb-3">
          <label htmlFor="exampleFormControlInputGender">Gender</label>
          <select
            value={!user ? "" : user.gender}
            onChange={(e) => setUser({ ...user, gender: e.target.value })}
            type="tel"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputGender"
            placeholder="Example label"
          >
            <option>male</option>
            <option>female</option>
          </select>
        </div>
        <div className="container ms-[24rem] text-neutral-400 mb-8">
          <p className="">Please note that we dont't support homosexuality.</p>
        </div>
      </div>
      <div className="w-[32em] flex justify-center">
        <Link>
          <button
            onClick={edite}
            type="button"
            className="font-bold inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs  uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
            data-twe-ripple-init
          >
            Edite Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EditeUser;
