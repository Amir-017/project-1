import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ControlUser = ({ setGetusersOfAdmin }) => {
  const [users, setUsers] = useState([]);
  const [usering, setUser] = useState({});

  const getUsers = () => {
    axios({
      method: "get",
      url: "http://localhost:3000/users",
    }).then((data) => setUsers(data.data));
  };
  useEffect(() => {
    getUsers();
  }, []);

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
        if (user.role == "admin") {
          setUser({ role: "member" });
          obj.role = "member";
        } else {
          setUser({ role: "admin" });
          obj.role = "admin";
        }
        axios({
          method: "patch",
          url: `http://localhost:3000/users/${obj.id}`,
          data: obj,
        }).then((res) => {
          getUsers();
        });
      }
    });
  };

  return (
    <div className="w-full  flex flex-col items-center  mb-10 ">
      <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8 gap-x-5">
        <div className=" inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="rounded overflow-hidden">
            <table className="mt-20 min-w-full  bg-gray-500 text-center text-sm  text-surface dark:text-white font-bold">
              <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    UserName
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-4">
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
                    <td className="whitespace-nowrap px-6 py-4 font-bold">
                      {user.username}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{user.role}</td>
                    <td className="whitespace-nowrap px-6 py-4 ">
                      <Link to={`/controluser/${user.id}`}>
                        <button
                          type="submit"
                          className="ms-4 inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          data-twe-ripple-init
                          data-twe-ripple-color="light"
                        >
                          Edite
                        </button>
                      </Link>

                      <button
                        onClick={() => deleteUser(user)}
                        type="submit"
                        className="me-3 ms-3 inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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
                          } px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out   focus:outline-none focus:ring-0  active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlUser;
