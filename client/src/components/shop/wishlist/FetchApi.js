import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { DashboardUserContext } from "../dashboardUser/Layout";
const apiURL = process.env.REACT_APP_API_URL;

// const { data, dispatch } = useContext(DashboardUserContext);

//     const userDetails = data.userDetails !== null ? data.userDetails : "";

//   const [fData, setFdata] = useState({
//     id: ""
//   });

//     useEffect(() => {
//       setFdata({
//         ...fData,
//         id: userDetails._id,
//       });

//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [userDetails]);

export const wishListProducts = async (id) => {
  
  let productArray = JSON.parse(localStorage.getItem("wishList"));
  // let resBookmark = await axios.get(`${apiURL}/api/product/user-wish-list`,{params: { uId: id } });
  // console.log("resBookmark", resBookmark);

  console.log("productArray", productArray);
  try {
    let res = await axios.post(`${apiURL}/api/product/wish-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
