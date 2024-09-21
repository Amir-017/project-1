import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ControlUser = ({ setGetusersOfAdmin }) => {
  const [users, setUsers] = useState([]);
  const [usering, setUser] = useState({});
  const [check, setCheck] = useState(false);
  const getUsers = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/users",
    }).then((data) => setUsers(data.data));
  };
  // console.log(users);

  useEffect(() => {
    getUsers();
  }, [check ? check : check]);

  const deleteUser = (user) => {
    // console.log(user);
    axios({
      method: "delete",
      url: `http://localhost:3000/users/${user.id}`,
    }).then((res) => {
      getUsers();
      setGetusersOfAdmin(true);
    });
  };

  const change = (obj) => {
    users.some((user) => {
      if (user == obj) {
        axios({
          method: "patch",
          url: `http://localhost:3000/users/${user.id}`,
          data: { ...user, role: user.role == "admin" ? "member" : "admin" },
        }).then((res) => {
          setCheck(!check);
        });
      }
    });
  };

  const navigate = useNavigate();
  const backAStep = () => {
    navigate(-1);
  };
  1;

  return (
    <div className="w-full  flex flex-col  items-center justify-center  mb-10  ">
      <table className="w-[60%] md:w-full mt-32   bg-gray-500 text-center text-sm  text-surface dark:text-white font-bold rounded-2xl">
        <thead className=" border-b border-neutral-200 font-bold dark:border-white/10 ">
          <tr>
            <th scope="col" className="px-5 py-4 md:px-4 md:py-6">
              UserName
            </th>
            <th scope="col" className="px-0 py-4 md:px-4 md:py-6">
              Role
            </th>
            <th scope="col" className="px-0 py-4 md:px-4 md:py-6">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr
              key={i}
              className="border-b border-neutral-200 dark:border-white/10 font-bold"
            >
              <td className="px-0 py-4   lg:px-6 lg:py-4 font-bold text-black">
                {user.username}
              </td>
              <td className=" px-0 py-4 lg:px-6 lg:py-4  text-black">
                {user.role}
              </td>
              <td className=" px-0 py-4 lg:px-6 lg:py-4 flex flex-col md:flex-row justify-center items-center gap-y-5 lg:gap-y-0 ">
                <Link to={`/controluser/${user.id}`}>
                  <button
                    type="submit"
                    className="font-bold  inline-block rounded bg-orange-600 px-2 md:px-6 pb-2 pt-2.5 text-xs  uppercase leading-normal text-white shadow-orange-3 transition duration-150 ease-in-out hover:bg-orange-accent-300 hover:shadow-orange-2 focus:bg-orange-accent-300 focus:shadow-orange-2 focus:outline-none focus:ring-0 active:bg-orange-600 active:shadow-orange-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Edite
                  </button>
                </Link>

                <button
                  onClick={() => deleteUser(user)}
                  type="submit"
                  className="ms-2 me-3  inline-block rounded bg-warning px-2 md:px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-warning-3 transition duration-150 ease-in-out hover:bg-warning-accent-300 hover:shadow-warning-2 focus:bg-warning-accent-300 focus:shadow-warning-2 focus:outline-none focus:ring-0 active:bg-warning-600 active:shadow-warning-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Delete
                </button>
                <Link>
                  <button
                    onClick={() => change(user)}
                    type="button"
                    className={` inline-block rounded  ${
                      user.role == "admin" ? "bg-danger" : "bg-success"
                    } me-2 px-1 md:px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out   focus:outline-none focus:ring-0  active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong`}
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    {user.role == "admin" ? "RemoveAdmin" : "MakeAdmin"}
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="w-full text-center my-5 ">
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

export default ControlUser;
