import axios from "axios";

const apiURL = process.env.REACT_APP_API_URL;
export const wishListProducts = async (id) => {
  
  let productArray = JSON.parse(localStorage.getItem("wishList"));

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
