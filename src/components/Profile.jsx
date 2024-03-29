import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { auth } from "../config/firebase";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineForm } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { logOut } from "../controllers/register-login/functions";

function Profile() {
  
  const { setLogged, logged } = useContext(Context);
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    auth?.currentUser?.photoURL
        ? setPhotoURL(auth?.currentUser?.photoURL)
        : setPhotoURL(`https://robohash.org/${auth?.currentUser?.email}`)
  }, [auth?.currentUser]);


  return (
    <div className="dropdown-end dropdown">
      {logged ? (
        <>
          <label
            tabIndex={0}
            className="btn-ghost btn-circle avatar btn m-1 border-neutral-500 shadow-2xl transition-all hover:border-transparent"
          >
            <div className="w-10 rounded-full">
              <img
                src={photoURL}
                alt="avatar"
                className="scale-125 rounded-full"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content text-white menu rounded-box menu-compact mt-3 w-52 bg-blue-gray-900 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge text-xs">Coming Soon</span>
              </a>
            </li>
            <li>
              <a className="justify-between">
                Settings
                <span className="badge text-xs">Coming Soon</span>
              </a>
            </li>
            <li>
              <a
                className="justify-between hover:text-danger"
                onClick={() => {
                    logOut();
                    setLogged(false);
                }}
              >
                Logout
                <AiOutlinePoweroff className="scale-150 text-white" />
              </a>
            </li>
          </ul>
        </>
      ) : (
        <>
          <label
            tabIndex={0}
            className="btn-ghost btn-circle avatar btn m-1 border-neutral-500 shadow-2xl transition-all hover:border-transparent"
          >
            <div className="w-10 rounded-full p-3">
              <BiUser className="m-auto scale-150" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content text-white menu rounded-box menu-compact mt-3 w-52 bg-blue-gray-900 p-2 shadow"
          >
            <li className="hover:text-edit">
              <a href="/login" className="justify-between">
                Sign in
                <FiLogIn className="scale-150 text-white" />
              </a>
            </li>
            <li className="hover:text-info">
              <a href="/register" className="justify-between">
                Sign up
                <AiOutlineForm className="scale-150 text-white" />
              </a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Profile;
