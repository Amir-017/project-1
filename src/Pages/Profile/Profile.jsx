import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input, initTWE } from "tw-elements";
const Profile = () => {
  const [user, setUser] = useState(null);
  const getinguser = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/user`,
    }).then((data) => setUser(data.data));
  };

  useEffect(() => {
    initTWE({ Input });
    getinguser();
  }, []);
  // console.log(use);
  return (
    <div className="w-full container mx-auto ">
      <h1 className="text-black text-4xl mt-32 uppercase ms-5 italic  underline decoration-gray-600 font-bold text-center md:text-start">
        my profile :
      </h1>
      <div className="flex justify-center items-center  mt-20 ">
        <img src={user ? user.userImage : ""} className="w-[60%] md:w-[30%]" />
      </div>
      <div className="italic flex flex-col items-start justify-center mt-10 ms-10 mb-10 ">
        <h1 className="font-bold text-[green] text-2xl">
          {user ? user.username : ""}
        </h1>
        <p className="text-neutral-600">
          I'm {user ? user.gender : ""} and I'm {user ? user.role : ""} in this
          site
        </p>
        <hr className="border-t-4 w-[17rem]   border-black rounded" />
      </div>
      <div className="w-full flex flex-col items-center ">
        <div className="w-3/4 relative mb-3">
          <label htmlFor="exampleFormControlInputUser">UserName</label>
          <input
            value={!user ? "" : user.username}
            onChange={(e) => e.target.value}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputUser"
            placeholder="Example label"
          />
        </div>
        <div className=" flex justify-center ">
          <p className="mb-10 text-neutral-400 ms-5 md:ms-0">
            Better to have real name to give a good impression to others that
            they are deaing with a real personality
          </p>
        </div>
        {/*  */}
        <div className="w-3/4 relative mb-3">
          <label htmlFor="exampleFormControlInputEmail">Email</label>
          <input
            value={!user ? "" : user.email}
            onChange={(e) => e.target.value}
            type="email"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputEmail"
            placeholder="Example label"
          />
        </div>
        <div className=" flex justify-center ">
          <p className="mb-10 text-neutral-400 ms-5 md:ms-0">
            Better to have readable email to give a good impression to others
            that they are deaing with a real personality
          </p>
        </div>
        {/*  */}
        <div className="w-3/4 relative mb-3">
          <label htmlFor="exampleFormControlInputGender">Gender</label>
          <select
            type="select"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputGender"
            placeholder="Example label"
          >
            <option>{!user ? "" : user.gender}</option>
          </select>
        </div>
        <div className="container text-center text-neutral-400 mb-8">
          <p className="ms-5 md:ms-0">
            Please note that we dont't support homosexuality.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-end  w-full md:w-[15rem] lg:w-[17rem] ">
        <Link to={`/profile/${user && user.id}`}>
          <button
            type="button"
            className="mb-[5em] font-bold inline-block rounded border-2 border-success px-6 pb-[6px] pt-2 text-xs  uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-50/50 hover:text-success-600 focus:border-success-600 focus:bg-success-50/50 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 motion-reduce:transition-none dark:hover:bg-green-950 dark:focus:bg-green-950"
            data-twe-ripple-init
          >
            Edite Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
