import React, { Fragment, useContext, useEffect } from "react";
import { DashboardContext } from "./";
import { GetAllData } from "./Action";

const DashboardCard = (props) => {
  const { data, dispatch } = useContext(DashboardContext);

  useEffect(() => {
    GetAllData(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {/* Card Start */}
      <div className="m-4 grid grid-cols-1 md:grid-cols-4 row-gap-4 col-gap-4">
        <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg hover:shadow-none cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 hover:border-opacity-100 ">
          
          <div className="text-2xl font-semibold">
            {data ? data.totalData.Users : 0}
          </div>
          <div className="text-lg font-medium">Customers</div>
         
        </div>
        <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg hover:shadow-none cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 hover:border-opacity-100 ">
          <div className="text-2xl font-semibold">
            {data ? data.totalData.Orders : 0}
          </div>
          <div className="text-lg font-medium">Orders</div>
       
        </div>
        <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg hover:shadow-none cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 hover:border-opacity-100 ">
         
          <div className="text-2xl font-semibold">
            {data ? data.totalData.Products : 0}
          </div>
          <div className="text-lg font-medium">Product</div>
        </div>
        <div className="flex flex-col justify-center items-center col-span-1 bg-white p-6 shadow-lg hover:shadow-none cursor-pointer transition-all duration-300 ease-in border-b-4 border-opacity-0 hover:border-opacity-100 ">

          <div className="text-2xl font-semibold">
            {data ? data.totalData.Categories : 0}
          </div>
          <div className="text-lg font-medium">Categories</div>
        </div>
      </div>
      {/* End Card */}
    </Fragment>
  );
};

export default DashboardCard;
