import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    // users.some((user) => {
    //   if (user == obj) {
    //     if (user.role == "admin") {
    //       setUser({ role: "member" });
    //       obj.role = "member";
    //     } else {
    //       setUser({ role: "admin" });
    //       obj.role = "admin";
    //     }
    //     axios({
    //       method: "patch",
    //       url: `http://localhost:3000/users/${obj.id}`,
    //       data: obj,
    //     }).then((res) => {
    //       getUsers();
    //     });
    //   }
    // });
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

  return (
    <div className="w-full  flex  items-center justify-center  mb-10  ">
      <table className="mx-5 mt-20   bg-gray-500 text-center text-sm  text-surface dark:text-white font-bold rounded-2xl">
        <thead className=" border-b border-neutral-200 font-bold dark:border-white/10 ">
          <tr>
            <th scope="col" className="px-0 py-4 md:px-4 md:py-6">
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
                    className="font-bold ms-4 inline-block rounded bg-orange-600 px-6 pb-2 pt-2.5 text-xs  uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                  >
                    Edite
                  </button>
                </Link>

                <button
                  onClick={() => deleteUser(user)}
                  type="submit"
                  className="me-3 ms-3 inline-block rounded bg-warning px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
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
                    } px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out   focus:outline-none focus:ring-0  active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong`}
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
  );
};

export default ControlUser;
