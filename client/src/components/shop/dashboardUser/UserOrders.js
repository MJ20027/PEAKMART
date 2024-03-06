import React, { Fragment, useEffect, useContext } from "react";
import moment from "moment";
import { fetchOrderByUser } from "./Action";
import Layout, { DashboardUserContext } from "./Layout";

const apiURL = process.env.REACT_APP_API_URL;

const TableHeader = () => {
  return (
    <Fragment>
      <thead>
        <tr>
          <th className="px-4 py-2 border">Products</th>
          <th className="px-4 py-2 border">Status</th>
          <th className="px-4 py-2 border">Total</th>
          <th className="px-4 py-2 border">Phone</th>
          <th className="px-4 py-2 border">Address</th>
          <th className="px-4 py-2 border">Transaction Id</th>
          <th className="px-4 py-2 border">Checkout</th>
          
        </tr>
      </thead>
    </Fragment>
  );
};

const TableBody = ({ order }) => {
  return (
    <Fragment>
      <tr className="border-b">
        <td className="w-64 hover:bg-gray-200 p-2 flex flex-col space-y-1">
          {order.allProduct.map((product, i) => {
            return (
              <span className="w-64 block flex items-center space-x-3" key={i}>
                <img
                  className="w-10 h-10 object-cover object-center"
                  src={`${apiURL}/uploads/products/${ product.id  && product.id.pImages[0]}`}
                  alt="productImage"
                />
                
                <span>{product.id && product.id.pName}</span>
                <span className="px-2">x{product.quantitiy}</span>
              </span>
            );
          })}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center cursor-default">
          {order.status === "Not processed" && (
            <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
              {order.status}
            </span>
          )}
          {order.status === "Processing" && (
            <span className="block text-yellow-600 rounded-full text-center text-xs px-2 font-semibold">
              {order.status}
            </span>
          )}
          {order.status === "Shipped" && (
            <span className="block text-blue-600 rounded-full text-center text-xs px-2 font-semibold">
              {order.status}
            </span>
          )}
          {order.status === "Delivered" && (
            <span className="block text-green-600 rounded-full text-center text-xs px-2 font-semibold">
              {order.status}
            </span>
          )}
          {order.status === "Cancelled" && (
            <span className="block text-red-600 rounded-full text-center text-xs px-2 font-semibold">
              {order.status}
            </span>
          )}
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">Rs {order.amount}</td>
        <td className="hover:bg-gray-200 p-2 text-center">{order.phone}</td>
        <td className="hover:bg-gray-200 p-2 text-center">{order.address}</td>
        <td className="hover:bg-gray-200 p-2 text-center">
          <b>{order.transactionId}</b>
        </td>
        <td className="hover:bg-gray-200 p-2 text-center">
          {moment(order.createdAt).format("lll")}
        </td>
      </tr>
    </Fragment>
  );
};

const OrdersComponent = () => {
  const { data, dispatch } = useContext(DashboardUserContext);
  const { OrderByUser: orders } = data;

  useEffect(() => {
    fetchOrderByUser(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (data.loading) {
    return (
      <div className="w-full md:w-9/12 flex items-center justify-center py-24">
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
      <div className="flex flex-col w-full my-4 md:my-0">
        <div className="border">
          <div className="uppercase py-4 px-4 text-lg font-semibold flex justify-evenly">
            Orders
          </div>
          <hr />
          <div className="overflow-auto bg-white shadow-lg p-4">
            <table className="table-auto border w-full my-2">
              <TableHeader />
              <tbody>
                {orders && orders.length > 0 ? (
                  orders.map((item, i) => {
                    return <TableBody key={i} order={item} />;
                  })
                ) : (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-xl text-center font-semibold py-8"
                    >
                      No order found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
            <div className="text-sm text-gray-600 mt-2">
              Total Orders : {orders && orders.length}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const UserOrders = (props) => {
  return (
    <Fragment>
      <Layout children={<OrdersComponent />} />
    </Fragment>
  );
};

export default UserOrders;
