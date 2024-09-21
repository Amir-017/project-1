import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const EditeProfile = () => {
  const [patchUser, setPatchUser] = useState(null);

  const navigate = useNavigate();

  const getUser = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/users/${id}`,
    }).then((data) => setPatchUser(data.data));
  };
  const { id } = useParams();
  useEffect(() => {
    getUser();
  }, []);

  const edite = () => {
    axios({
      method: "patch",
      url: `http://localhost:3000/users/${id}`,
      data: patchUser,
    }).then((res) => {
      axios({
        method: "patch",
        url: `http://localhost:3000/user`,
        data: patchUser,
      }).then((res) => {
        setTimeout(() => {
          navigate("/profile");
        }, 1000);
      });
    });
  };
  const backAStep = () => {
    navigate(-1);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div className=" h-[5em] flex flex-col items-start justify-center  mb-5 ms-16 mt-32 w-full ">
        <h1 className="italic font-bold text-2xl md:text-2xl lg:text-3xl underline text-center md:text-start">
          My Profile Ready To Change...
        </h1>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="w-3/4  mb-3" data-twe-input-wrapper-init>
          <label htmlFor="exampleFormControlInputUsername">UserName</label>
          <input
            value={!patchUser ? "" : patchUser.username}
            onChange={(e) =>
              setPatchUser({ ...patchUser, username: e.target.value })
            }
            type="tel"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputUsername"
            placeholder="Example label"
          />
        </div>
        <div className="container flex justify-center ">
          <p className="mb-10 text-neutral-400 ms-5">change Your Username</p>
        </div>
        {/*  */}
        <div className="w-3/4  mb-3" data-twe-input-wrapper-init>
          <label htmlFor="exampleFormControlInputEmail">Email</label>
          <input
            value={!patchUser ? "" : patchUser.email}
            onChange={(e) =>
              setPatchUser({ ...patchUser, email: e.target.value })
            }
            type="tel"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputEmail"
            placeholder="Example label"
          />
        </div>
        <div className=" flex justify-center ms-5">
          <p className="mb-10 text-neutral-400">
            once you change your mail you have to re-confirm it from your mail
            box.
          </p>
        </div>
        {/*  */}
        <div className="w-3/4  mb-3">
          <label htmlFor="exampleFormControlInputPassword">Password</label>
          <input
            value={!patchUser ? "" : patchUser.password}
            onChange={(e) =>
              setPatchUser({ ...patchUser, password: e.target.value })
            }
            type="tel"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputPassword"
            placeholder="Example label"
          />
        </div>
        <div className=" text-neutral-400 mb-8 ms-5">
          <p className="">Your new password shall be more than 6 characters</p>
        </div>
        {/*  */}
        <div className="w-3/4  mb-3">
          <label htmlFor="exampleFormControlInputGender">Gender</label>
          <select
            value={!patchUser ? "" : patchUser.gender}
            onChange={(e) =>
              setPatchUser({ ...patchUser, gender: e.target.value })
            }
            type="tel"
            className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputGender"
            placeholder="Example label"
          >
            <option>male</option>
            <option>female</option>
          </select>
        </div>
        <div className=" text-neutral-400 mb-8 ms-5">
          <p className="">Please note that we dont't support homosexuality.</p>
        </div>
      </div>
      <div className=" flex justify-center md:justify-end  w-full md:w-[16rem] lg:w-[18rem] mb-5">
        <Link>
          <button
            onClick={edite}
            type="button"
            className="inline-block rounded border-2 border-warning px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-warning-50/50 hover:text-warning-600 focus:border-warning-600 focus:bg-warning-50/50 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 motion-reduce:transition-none dark:hover:bg-yellow-950 dark:focus:bg-yellow-950"
            data-twe-ripple-init
          >
            Edite Profile
          </button>
        </Link>
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

export default EditeProfile;
