import React, { Fragment, useContext, useState } from "react";
import { HomeContext } from "./index";
import { getAllProduct } from "../../admin/products/FetchApi";
import "./style.css";

const Search = () => {
  const { data, dispatch } = useContext(HomeContext);
  const [search, setSearch] = useState("");
  const [productArray, setPa] = useState(null);

  const searchHandle = (e) => {
    setSearch(e.target.value);
    let timer;
    clearTimeout(timer);
    fetchData();
    console.log("clicked it");
    dispatch({
      type: "searchHandleInReducer",
      payload: e.target.value,
      productArray: productArray,
    });
  };

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      let responseData = await getAllProduct();
      if (responseData && responseData.Products) {
        setPa(responseData.Products);
        dispatch({ type: "loading", payload: false });
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="my-4">
      <input
        value={search}
        onChange={(e) => searchHandle(e)}
        className="px-4 text-xl py-1 focus:outline border-2 w-full rounded-full"
        type="text"
        placeholder="Search products..."
      />
    </div>
  );
};

const ProductCategoryDropdown = () => {
  return (
    <Fragment>
      <Search />
    </Fragment>
  );
};

export default ProductCategoryDropdown;
