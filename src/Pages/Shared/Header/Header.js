import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu text-red-700 font-medium menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {user?.email ? (
              <>
                <li>
                  <Link to="/my-reviews">My Reviews</Link>
                </li>
                <li>
                  <Link to="/add-service">Add Service</Link>
                </li>
                <li>
                  <Link onClick={handleSignOut}>Log Out</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">LogIn</Link>
                </li>
                <li>
                  <Link to="/blogs">Blogs</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl font-bold text-red-700"
        >
          FOODIES
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 text-red-700 font-medium">
          {user?.email ? (
            <>
              <li>
                <Link to="/my-reviews">My Reviews</Link>
              </li>
              <li>
                <Link to="/add-service">Add Service</Link>
              </li>
              <li>
                <Link onClick={handleSignOut}>Log Out</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">LogIn</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
