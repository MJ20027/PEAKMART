import React, { Fragment, useContext, useState, useEffect } from "react";
import Layout from "./Layout";
import { DashboardUserContext } from "./Layout";
import { updatePersonalInformationAction } from "./Action";

const ProfileComponent = () => {
  const { data, dispatch } = useContext(DashboardUserContext);
  const userDetails = data.userDetails !== null ? data.userDetails : "";

  const [fData, setFdata] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    success: false,
  });

  useEffect(() => {
    setFdata({
      ...fData,
      id: userDetails._id,
      name: userDetails.name,
      email: userDetails.email,
      phone: userDetails.phoneNumber,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails]);

  const handleSubmit = () => {
    updatePersonalInformationAction(dispatch, fData);
  };

  if (data.loading) {
    return (
      <div className="w-full md:w-9/12 flex items-center justify-center ">
        <svg
          className="w-20 h-20 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <rect
            fill="#2C2D30"
            stroke="#2C2D30"
            stroke-width="15"
            width="30"
            height="30"
            x="25"
            y="50"
          >
            <animate
              attributeName="y"
              calcMode="spline"
              dur="4.7"
              values="50;120;50;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.4"
            ></animate>
          </rect>
          <rect
            fill="#2C2D30"
            stroke="#2C2D30"
            stroke-width="15"
            width="30"
            height="30"
            x="85"
            y="50"
          >
            <animate
              attributeName="y"
              calcMode="spline"
              dur="4.7"
              values="50;120;50;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="-.2"
            ></animate>
          </rect>
          <rect
            fill="#2C2D30"
            stroke="#2C2D30"
            stroke-width="15"
            width="30"
            height="30"
            x="145"
            y="50"
          >
            <animate
              attributeName="y"
              calcMode="spline"
              dur="4.7"
              values="50;120;50;"
              keySplines=".5 0 .5 1;.5 0 .5 1"
              repeatCount="indefinite"
              begin="0"
            ></animate>
          </rect>
        </svg>
      </div>
    );
  }
  return (
    <Fragment>
      <div className="flex flex-col w-full my-4 md:my-0 md:px-8 flex items-center">
        <div className="shadow-lg border w-3/4">
          <div className="py-4 px-4 text-lg font-semibold">
            Personal Information
          </div>
          <hr />
          <div className="py-4 px-4 md:px-8 lg:px-16 flex flex-col space-y-4">
            {fData.success ? (
              <div className="bg-green-200 px-4 py-2 rounded">
                {fData.success}
              </div>
            ) : (
              ""
            )}
            <div className="flex flex-col space-y-2">
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) => setFdata({ ...fData, name: e.target.value })}
                value={fData.name}
                type="text"
                id="name"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email">Email</label>
              <input
                value={fData.email}
                readOnly
                type="email"
                id="email"
                className="cursor-not-allowed border px-4 py-2 bg-gray-200 w-full focus:outline-none focus:cursor-not-allowed"
              />
              {/* <span className="text-xs text-gray-500">
                You can't change your email
              </span> */}
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="number">Phone Number</label>
              <input
                onChange={(e) => setFdata({ ...fData, phone: e.target.value })}
                value={fData.phone}
                type="number"
                id="number"
                className="border px-4 py-2 w-full focus:outline-none"
              />
            </div>
            <div
              onClick={(e) => handleSubmit()}
              className="w-full text-center cursor-pointer px-4 py-2 text-gray-100 flex justify-center"
            >
              <div style={{ background: "#303031" }} className="w-2/4 py-3 rounded">
                Update Information
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const UserProfile = (props) => {
  return (
    <Fragment>
      <Layout children={<ProfileComponent />} />
    </Fragment>
  );
};

export default UserProfile;
