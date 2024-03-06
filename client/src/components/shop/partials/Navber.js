import React, { Fragment, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./style.css";

import { logout } from "./Action";
import { LayoutContext } from "../index";
import { isAdmin } from "../auth/fetchApi";

const Navber = (props) => {
  const history = useHistory();
  const location = useLocation();

  const { data, dispatch } = useContext(LayoutContext);

  const navberToggleOpen = () =>
    data.navberHamburger
      ? dispatch({ type: "hamburgerToggle", payload: false })
      : dispatch({ type: "hamburgerToggle", payload: true });

  const loginModalOpen = () =>
    data.loginSignupModal
      ? dispatch({ type: "loginSignupModalToggle", payload: false })
      : dispatch({ type: "loginSignupModalToggle", payload: true });

  const cartModalOpen = () =>
    data.cartModal
      ? dispatch({ type: "cartModalToggle", payload: false })
      : dispatch({ type: "cartModalToggle", payload: true });

  return (
    <Fragment>
      {/* Navber Section */}
      <nav
        className="fixed top-0 w-full z-20 shadow-lg lg:shadow-none bg-white"
        style={{ height: "68px", opacity: "0.9" }}
      >
        <div className="m-4 md:mx-12 grid grid-cols-4 lg:grid-cols-3">
          <div className="hidden lg:block col-span-1 flex text-gray-600 mt-1">
            <span onClick={(e) => history.push("/")}></span>
          </div>
          <div className="col-span-2 lg:hidden flex justify-items-stretch	 items-center">
            <span
              onClick={(e) => history.push("/")}
              className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center"
            >
              PeakMart
            </span>
          </div>
          <div
            onClick={(e) => history.push("/")}
            className="hidden lg:block flex items-left col-span-1 text-center text-gray-800 font-bold  uppercase text-2xl cursor-pointer"
          >
            PeakMart
          </div>
          <div className="flex items-right col-span-2 lg:col-span-1 flex justify-end">
            {localStorage.getItem("jwt") ? (
              <Fragment>
                <div
                  className="userDropdownBtn hover:bg-gray-200 px-2 py-2 rounded-lg relative"
                  title="Logout"
                >
                  <svg
                    className="cursor-pointer w-8 h-8 text-gray-600 hover:text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="profile"
                  >
                    <g data-name="Layer 2">
                      <circle cx="16" cy="6.96" r="6"></circle>
                      <path d="M30.86,26.84a15.07,15.07,0,0,0-4.11-7.47A12.47,12.47,0,0,0,25.13,18,15,15,0,0,0,16,15,15.24,15.24,0,0,0,5.24,19.37a15.07,15.07,0,0,0-4.11,7.47,3.42,3.42,0,0,0,.69,2.88A3.52,3.52,0,0,0,4.58,31H27.42a3.52,3.52,0,0,0,2.75-1.32A3.42,3.42,0,0,0,30.86,26.84Z"></path>
                    </g>
                  </svg>

                  <div className="userDropdown absolute right-0 mt-1 bg-gray-200 rounded">
                    {!isAdmin() ? (
                      <Fragment>
                        <li className="flex flex-col text-gray-700 w-40 shadow-lg">
                          <span
                            onClick={(e) => history.push("/user/orders")}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                          >
                            <span>
                              <b>Orders</b>
                            </span>
                          </span>
                          <span
                            onClick={(e) => history.push("/user/profile")}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                          >
                            <span>
                              <b>Profile</b>
                            </span>
                          </span>
                          <span
                            onClick={(e) => history.push("/wish-list")}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                          >
                            <span>
                              <b>Bookmark</b>
                            </span>
                          </span>

                          <span
                            onClick={(e) => logout()}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                          >
                            <span>
                              <b>Logout</b>
                            </span>
                          </span>
                        </li>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <li className="flex flex-col text-gray-700 w-40 shadow-lg">
                          <span
                            onClick={(e) => history.push("/admin/dashboard")}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                          >
                            <span>Admin Panel</span>
                          </span>
                          <span
                            onClick={(e) => logout()}
                            className="flex space-x-2 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                          >
                            <span>Logout</span>
                          </span>
                        </li>
                      </Fragment>
                    )}
                  </div>
                </div>
              </Fragment>
            ) : (
              <div
                onClick={(e) => loginModalOpen()}
                className="cursor-pointer hover:bg-gray-200 px-2 py-2 rounded-lg"
                title="Login"
              >
                <svg
                  className="w-8 h-8 text-gray-600 hover:text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="login"
                >
                  <path d="M21,0H10A3.009,3.009,0,0,0,7,3V9h3a2.958,2.958,0,0,1,.88-2.12,3.061,3.061,0,0,1,4.24,0l3,3a3.031,3.031,0,0,1,0,4.24l-3,3a3.024,3.024,0,0,1-4.24,0A2.958,2.958,0,0,1,10,15H7v6a3.009,3.009,0,0,0,3,3H21a3.009,3.009,0,0,0,3-3V3A3.009,3.009,0,0,0,21,0Z"></path>
                  <path d="M13.59,13l-1.3,1.29a1.008,1.008,0,0,0,0,1.42,1.035,1.035,0,0,0,1.42,0l3-3a1.041,1.041,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,1.42L13.59,11H1a1,1,0,0,0,0,2Z"></path>
                </svg>
              </div>
            )}
            {/* Cart Modal Button */}
            <div
              onClick={(e) => cartModalOpen()}
              className="hover:bg-gray-200 px-2 py-2 rounded-lg relative cursor-pointer"
              title="Cart"
            >
              <svg
                className="w-8 h-8 text-gray-600 hover:text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                id="cart"
              >
                <path d="M63.2 161h164.7c-9.6-7.3-19.3-14.7-28.9-22 4.8 14.6 9.6 29.2 14.4 43.9 11.6 35.1 23.1 70.2 34.7 105.3C262 330.4 276 372.7 289.9 415c12.1 36.7 24.2 73.4 36.2 110.1 5.9 17.8 11.5 35.7 17.6 53.4.1.3.2.5.3.8 4.9 14.9 21 26.1 36.9 21 14.8-4.8 26.2-20.9 21-36.9-4.8-14.6-9.6-29.2-14.4-43.9-11.6-35.1-23.1-70.2-34.7-105.3-13.9-42.3-27.8-84.6-41.8-126.9-12.1-36.7-24.2-73.4-36.2-110.1-5.9-17.8-11.4-35.7-17.6-53.4-.1-.3-.2-.5-.3-.8-4.2-12.6-15.3-22-28.9-22H63.3c-15.7 0-30.7 13.8-30 30 .6 16.3 13.1 30 29.9 30z"></path>
                <path d="M347 556.1c-16.2 28.9-32.5 57.7-48.7 86.6-2.3 4.2-4.7 8.3-7 12.5-11.1 19.7 2.9 45.1 25.9 45.1h458c21.1 0 42.3.4 63.5 0h.9c15.7 0 30.7-13.8 30-30-.7-16.3-13.2-30-30-30h-458c-21.1 0-42.4-.6-63.5 0h-.9c8.6 15 17.3 30.1 25.9 45.1 16.2-28.9 32.5-57.7 48.7-86.6 2.3-4.2 4.7-8.3 7-12.5 7.7-13.7 3.7-33.4-10.8-41-14.2-7.4-32.8-3.8-41 10.8z"></path>
                <circle cx="746.5" cy="824.9" r="68.1"></circle>
                <path d="M658.4 824.9c.4 37.5 23.9 69.9 58.8 83 33 12.4 73.6 1.6 96.1-25.6 23.9-29 28.7-70.3 8.8-102.9-19.6-32.2-57.2-47.9-93.9-40.7-40.5 7.9-69.4 45.6-69.8 86.2-.1 10.5 9.3 20.5 20 20 10.9-.5 19.9-8.8 20-20 0-1.6.1-3.3.2-4.9 0-.7.1-1.4.2-2.1.3-4-.1 1.3-.2 1.2-.7-.4 2.1-9 2.4-9.8.3-.8.9-4.2 1.6-4.4.2-.1-1.8 3.7-.7 1.7.4-.8.8-1.6 1.1-2.4 1.5-3 3.3-5.7 5.1-8.5 1.9-2.9-2.7 3.1.5-.6 1-1.1 2-2.3 3.1-3.4s2.2-2.2 3.3-3.2c.5-.4 1-.9 1.5-1.3.7-.6 3.6-2 1-.9-2.2.9-.6.5.1 0s1.4-1 2.2-1.5c1.1-.7 2.2-1.4 3.4-2 1.5-.9 3.1-1.6 4.7-2.4.5-.3 2.6-1.3 0-.1-3 1.4 1-.3 1.3-.4 2.7-1 5.6-1.8 8.4-2.4.9-.2 1.8-.3 2.7-.5 2.2-.5-1.9.2-1.9.2 1.8 0 3.7-.4 5.5-.4 3.3-.1 6.5 0 9.8.3 3.7.3-3.8-.7.8.2 1.8.3 3.5.8 5.3 1.2 1.5.4 3 .9 4.5 1.4.4.1 2.4.8 2.5.9.1.3-3.7-1.9-1.7-.7 2.8 1.7 5.9 3 8.7 4.8.7.5 1.4 1 2.2 1.5.7.5 2.2.9.1 0-2-.8-.7-.6 0 .1.7.6 1.3 1.1 2 1.7 2.5 2.2 4.6 4.6 6.8 7 3 3.3-1.4-2.3.5.6.8 1.3 1.7 2.5 2.5 3.8.8 1.3 1.6 2.7 2.3 4l.9 1.8c1.9 3.6.4-.3-.1-.5 1.2.4 2.5 7.6 2.9 8.9.3 1.3.6 2.7.9 4 .8 3.8-.1-1.2-.1-1.3.5.5.3 2.8.3 3.4.2 3 .2 6.1 0 9.1-.1.9-.2 1.8-.2 2.8-.1 2-1.2 1.7.2-1.2-.7 1.5-.7 3.7-1.1 5.3-.7 2.8-1.8 5.5-2.6 8.3-.8 2.5 1.8-3.4.5-1.1-.3.5-.6 1.2-.8 1.8-.8 1.6-1.6 3.1-2.5 4.6-.8 1.3-1.6 2.6-2.5 3.9-2.7 4.1 1.9-2-.4.7-2.2 2.5-4.3 4.9-6.8 7.1-.4.4-2.8 3-3.5 3 0 0 4.1-2.8.9-.8-.6.4-1.1.7-1.6 1.1-2.8 1.8-5.7 3.3-8.6 4.8-3.1 1.6 3.6-1.2-.7.3-1.5.5-2.9 1-4.4 1.5-1.5.4-3 .8-4.6 1.2-.7.1-1.3.3-2 .4-4.4 1 3.2-.2.6 0-3.3.3-6.5.5-9.8.4-1.6 0-3.2-.2-4.9-.3-.6 0-3-.3-.1 0 3.3.3-.7-.2-1.4-.3-3.5-.7-6.9-1.8-10.3-3-.6-.2-2.6-1.2-.1 0 2.9 1.4-.6-.3-1.2-.6-1.6-.8-3.1-1.6-4.6-2.5-1.5-.9-2.9-1.9-4.4-2.9-2.4-1.5.3.8.9.8-.4 0-1.7-1.4-2-1.7-2.6-2.3-5.1-4.7-7.4-7.4 0 0-1.7-1.7-1.7-2 0 .4 2.4 3.4.8.9-1-1.5-2-2.9-2.9-4.4-1-1.7-1.9-3.5-2.8-5.2-2.1-4.1 1 3.2-.6-1.3-1.2-3.4-2.2-6.8-2.9-10.4-.1-.6-.1-1.5-.4-2 1.5 3.3.3 2.8.1.5-.2-2.1-.3-4.2-.3-6.3-.1-10.5-9.1-20.5-20-20-11.2.3-20.6 8.7-20.5 19.9z"></path>
                <circle cx="401.8" cy="824.9" r="68.1"></circle>
                <path d="M313.7 824.9c.4 37.5 23.9 69.9 58.8 83 33 12.4 73.6 1.6 96.1-25.6 23.9-29 28.7-70.3 8.8-102.9-19.6-32.2-57.2-47.9-93.9-40.7-40.6 7.9-69.4 45.6-69.8 86.2-.1 10.5 9.3 20.5 20 20 10.9-.5 19.9-8.8 20-20 0-1.6.1-3.3.2-4.9 0-.7.1-1.4.2-2.1.3-4-.1 1.3-.2 1.2-.7-.4 2.1-9 2.4-9.8.3-.8.9-4.2 1.6-4.4.2-.1-1.8 3.7-.7 1.7.4-.8.8-1.6 1.1-2.4 1.5-3 3.3-5.7 5.1-8.5 1.9-2.9-2.7 3.1.5-.6 1-1.1 2-2.3 3.1-3.4s2.2-2.2 3.3-3.2c.5-.4 1-.9 1.5-1.3.7-.6 3.6-2 1-.9-2.2.9-.6.5.1 0s1.4-1 2.2-1.5c1.1-.7 2.2-1.4 3.4-2 1.5-.9 3.1-1.6 4.7-2.4.5-.3 2.6-1.3 0-.1-3 1.4 1-.3 1.3-.4 2.7-1 5.6-1.8 8.4-2.4.9-.2 1.8-.3 2.7-.5 2.2-.5-1.9.2-1.9.2 1.8 0 3.7-.4 5.5-.4 3.3-.1 6.5 0 9.8.3 3.7.3-3.8-.7.8.2 1.8.3 3.5.8 5.3 1.2 1.5.4 3 .9 4.5 1.4.4.1 2.4.8 2.5.9.1.3-3.7-1.9-1.7-.7 2.8 1.7 5.9 3 8.7 4.8.7.5 1.4 1 2.2 1.5.7.5 2.2.9.1 0-2-.8-.7-.6 0 .1.7.6 1.3 1.1 2 1.7 2.5 2.2 4.6 4.6 6.8 7 3 3.3-1.4-2.3.5.6.8 1.3 1.7 2.5 2.5 3.8.8 1.3 1.6 2.7 2.3 4l.9 1.8c1.9 3.6.4-.3-.1-.5 1.2.4 2.5 7.6 2.9 8.9.3 1.3.6 2.7.9 4 .8 3.8-.1-1.2-.1-1.3.5.5.3 2.8.3 3.4.2 3 .2 6.1 0 9.1-.1.9-.2 1.8-.2 2.8-.1 2-1.2 1.7.2-1.2-.7 1.5-.7 3.7-1.1 5.3-.7 2.8-1.8 5.5-2.6 8.3-.8 2.5 1.8-3.4.5-1.1-.3.5-.6 1.2-.8 1.8-.8 1.6-1.6 3.1-2.5 4.6-.8 1.3-1.6 2.6-2.5 3.9-2.7 4.1 1.9-2-.4.7-2.2 2.5-4.3 4.9-6.8 7.1-.4.4-2.8 3-3.5 3 0 0 4.1-2.8.9-.8-.6.4-1.1.7-1.6 1.1-2.8 1.8-5.7 3.3-8.6 4.8-3.1 1.6 3.6-1.2-.7.3-1.5.5-2.9 1-4.4 1.5-1.5.4-3 .8-4.6 1.2-.7.1-1.3.3-2 .4-4.4 1 3.2-.2.6 0-3.3.3-6.5.5-9.8.4-1.6 0-3.2-.2-4.9-.3-.6 0-3-.3-.1 0 3.3.3-.7-.2-1.4-.3-3.5-.7-6.9-1.8-10.3-3-.6-.2-2.6-1.2-.1 0 2.9 1.4-.6-.3-1.2-.6-1.6-.8-3.1-1.6-4.6-2.5-1.5-.9-2.9-1.9-4.4-2.9-2.4-1.5.3.8.9.8-.4 0-1.7-1.4-2-1.7-2.6-2.3-5.1-4.7-7.4-7.4 0 0-1.7-1.7-1.7-2 0 .4 2.4 3.4.8.9-1-1.5-2-2.9-2.9-4.4-1-1.7-1.9-3.5-2.8-5.2-2.1-4.1 1 3.2-.6-1.3-1.2-3.4-2.2-6.8-2.9-10.4-.1-.6-.1-1.5-.4-2 1.5 3.3.3 2.8.1.5-.2-2.1-.3-4.2-.3-6.3-.1-10.5-9.1-20.5-20-20-11.3.3-20.7 8.7-20.5 19.9zM960.8 258 839.4 571H372.9L269.7 258z"></path>
                <path d="M941.5 252.5c-13.7 35.3-27.3 70.6-41 105.9-21.8 56.3-43.6 112.5-65.3 168.8-5 12.9-10 25.9-15 38.8 6.4-4.9 12.9-9.8 19.3-14.7H430.4c-18.8 0-37.8-.8-56.7 0h-.8c6.4 4.9 12.9 9.8 19.3 14.7-11.7-35.5-23.3-70.9-35-106.4-18.5-56.1-37-112.2-55.4-168.4-4.3-12.9-8.5-25.8-12.8-38.8-6.4 8.4-12.9 16.9-19.3 25.3H932.8c9 0 18 .2 26.9 0h1.2c10.5 0 20.5-9.2 20-20s-8.8-20-20-20H297.8c-9 0-18-.2-26.9 0h-1.2c-12.5 0-23.4 12.9-19.3 25.3 11.7 35.5 23.3 70.9 35 106.4 18.5 56.1 37 112.2 55.4 168.4 4.3 12.9 8.5 25.8 12.8 38.8 2.8 8.4 10.2 14.7 19.3 14.7H782c18.8 0 37.8.7 56.7 0h.8c9.5 0 16.1-6.4 19.3-14.7 13.7-35.3 27.3-70.6 41-105.9 21.8-56.3 43.6-112.5 65.3-168.8 5-12.9 10-25.9 15-38.8 3.8-9.8-4.2-22.4-14-24.6-11.5-2.6-20.6 3.5-24.6 14z"></path>
              </svg>

              {data.cartProduct !== null && data.cartProduct.length > 0 ? (
                <span className="absolute top-0 ml-6 mt-1 bg-green-700 rounded px-1 text-white text-xs hover:text-gray-200 font-semibold">
                  {data.cartProduct.length}
                </span>
              ) : (
                <span></span>
              )}
            </div>
          </div>
        </div>
        <div
          className={
            data.navberHamburger && data.navberHamburger
              ? "px-1 pb-2 md:pb-0 md:px-10 lg:hidden"
              : "hidden px-1 pb-2 md:pb-0 md:px-10 lg:hidden"
          }
        >
          <div className="col-span-1 flex flex-col text-gray-600">
            <span
              className="font-medium text-lg tracking-widest hover:text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-lg cursor-pointer"
              onClick={(e) => history.push("/")}
            >
              Shop
            </span>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navber;
