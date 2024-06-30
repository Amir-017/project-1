import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // const [user, setUser] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   gender: "male",
  // });
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");

  const [checkUsername, setCheckUsername] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    // initTWE({ Ripple, Input });
  }, []);

  const navigate = useNavigate();

  const handleForm = (e) => {
    setLoaded(true);

    // console.log("hello");
    e.preventDefault();
    const myregEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const designLabel = () => {
      setLoaded(true);
      setCheckUsername(false);
      setCheckEmail(false);
      setCheckPassword(false);
    };

    if (username == "") {
      setLoaded(true);
      setCheckUsername(true);
    } else if (myregEx.test(email) == false) {
      designLabel();
      setCheckEmail(true);
    } else if (password == "") {
      designLabel();
      setCheckPassword(true);
    } else {
      designLabel();

      axios({
        method: "post",
        url: "  http://localhost:3000/users",
        data: {
          username,
          email,
          password,
          role: username == "amer ahmed" ? "admin" : "member",

          gender,
          userImage:
            gender == "male"
              ? "/src/Photos/th.jpg"
              : "/src/Photos/avatar-woman.jpg",
        },
      }).then((res) => {
        setLoaded(false);
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      });
    }
  };
  // console.log(gender);
  return (
    <div className="flex items-center   w-full  bg-[#C0C0C0]">
      <form
        onSubmit={(e) => handleForm(e)}
        className="mt-16 mb-5 mx-auto block max-w-md rounded-l p-6  "
      >
        <div className="grid grid-cols-1 gap-4">
          <div className="relative mb-6">
            <label
              htmlFor="exampleInput124"
              className={
                !checkUsername
                  ? "  pointer-events-none  left-3 top-0 mb-0 max-w-[90%]  pt-[0.37rem] leading-[1.6] text-black  "
                  : "  pointer-events-none  left-3 top-0 mb-0 max-w-[90%]  pt-[0.37rem] leading-[1.6] text-[red]  "
              }
            >
              {!checkUsername ? "First name" : "Wrong UserName"}
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="text-black peer block min-h-[auto] w-full rounded border-2 bg-white px-3 py-[0.32rem] "
              id="exampleInput124"
            />
          </div>
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="exampleInput126"
            className={
              !checkEmail
                ? "  pointer-events-none  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                : "  pointer-events-none  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[red] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            }
          >
            {!checkEmail ? "Email address " : "Wrong Email address "}
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="peer block min-h-[auto] w-full rounded border-2 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear   motion-reduce:transition-none dark:text-black   "
            id="exampleInput126"
          />
        </div>

        <div className="relative mb-6">
          <label
            htmlFor="exampleInput127"
            className={
              !checkPassword
                ? "  pointer-events-none  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                : "  pointer-events-none  left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-[red] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8]  peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none "
            }
          >
            {!checkPassword ? " Password" : "Wrong Password"}
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="peer block min-h-[auto] w-full rounded border-2 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  motion-reduce:transition-none dark:text-black   [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput127"
            placeholder="Password"
          />
        </div>

        <div className="relative mb-6">
          <label htmlFor="" className="text-black">
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="peer block min-h-[auto] w-full rounded border-2 bg-white px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear peer-focus:text-primary  motion-reduce:transition-none dark:text-black  dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInput128"
          >
            <option>male</option>
            <option>female</option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          {loaded ? (
            "Sign Up"
          ) : (
            <div
              className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] text-warning opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
              role="status"
            ></div>
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
