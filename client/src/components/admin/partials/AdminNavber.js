import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

const AdminNavber = (props) => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishList");
    window.location.href = "/";
  };

  return (
    <Fragment>
      <nav className="sticky z-10 flex items-center shadow-md justify-between px-4 py-4 md:px-8 top-0 w-full bg-white">
        <div className="hidden lg:block">
          <span
            onClick={(e) => history.push("/admin/dashboard")}
            className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center"
          >
            PEAKMART
          </span>
        </div>
        <div className="lg:hidden flex items-center">
          <span
            onClick={(e) => history.push("/admin/dashboard")}
            className="flex items-left text-center font-bold uppercase text-gray-800 text-2xl cursor-pointer px-2 text-center"
          >
            PEAKMART
          </span>
        </div>
        <div className="flex items-center">
          
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
              <li className="flex flex-col text-gray-700">
                <span
                  onClick={(e) => history.push("/")}
                  className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                >
                  <span>Shop</span>
                </span>

                <span
                  onClick={(e) => logout()}
                  className="flex space-x-1 py-2 px-8 hover:bg-gray-400 cursor-pointer"
                >
                  <span>Logout</span>
                </span>
              </li>
            </div>
          </div>
        </div>

      </nav>
    </Fragment>
  );
};

export default AdminNavber;
