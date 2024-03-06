import React, { Fragment, useContext, useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router-dom";
import { wishListProducts } from "./FetchApi";
const apiURL = process.env.REACT_APP_API_URL;

const Product = () => {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    let responseData = await wishListProducts();
    setTimeout(() => {
      if (responseData && responseData.Products) {
        setProducts(responseData.Products);
        setLoading(false);
      }
    }, 50);
  };

  const removeFromWishList = (id) => {
    let list = localStorage.getItem("wishList")
      ? JSON.parse(localStorage.getItem("wishList"))
      : [];
    if (list.length > 0) {
      if (list.includes(id) === true) {
        list.splice(list.indexOf(id), 1);
        localStorage.setItem("wishList", JSON.stringify(list));
        fetchData();
      }
    }
  };
  if (loading) {
    return (
      <div className="my-32 text-2xl text-center">No bookmarked product</div>
    );
  }
  
  return (


    <Fragment>
    
      <div className="grid grid-cols-2 md:grid-cols-1">
        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <div
                key={index}
                className="relative m-2 md:py-6 md:border-t md:border-b md:my-2 md:mx-0 col-span-1 md:flex md:items-center md:justify-between"
              >
                <div className="md:w-1/2 md:flex md:items-center">
                  <img
                    onClick={(e) => history.push(`/products/${product._id}`)}
                    className="cursor-pointer md:h-20 md:w-20 object-cover object-center"
                    src={`${apiURL}/uploads/products/${product.pImages[0]}`}
                    alt="wishListproduct"
                  />
                  <div className="text-lg md:ml-6 truncate">
                    {product.pName}
                  </div>
                </div>
                <div className="md:w-1/2 md:flex md:items-center md:justify-around">
                  <div className="font-semibold text-gray-600">
                    Rs {product.pPrice}
                  </div>
                  {product.pQuantity > 0 ? (
                    <div className="text-green-500 my-1 md:my-0">
                      Stock Available
                    </div>
                  ) : (
                    <div className="text-red-500 my-1 md:my-0">Out Stock</div>
                  )}

                  <div
                    style={{ background: "#303031" }}
                    onClick={(e) => history.push(`/products/${product._id}`)}
                    className="inline-block px-4 py-2 text-white text-xs md:text-base rounded-full text-center cursor-pointer hover:opacity-75"
                  >
                    View
                  </div>
                </div>
                <div className="absolute top-0 right-0 mx-2 my-2 md:relative">


                  <svg
                    onClick={(e) => removeFromWishList(product._id)}
                    className="w-6 h-6 text-black-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </div>
              </div>
            );
          })
        ) : (
          <div>No bookmarked product</div>
        )}
      </div>
    </Fragment>
  );
};

const SingleWishProduct = (props) => {

  return (
    <Fragment>
        <section className="mx-4 mt-20 md:mx-12 md:mt-32 lg:mt-24">
          <hr />
          <div className="text-2xl flex justify-around">
            <b>BOOKMARKS</b>
          </div>
          <Product />
        </section>
    </Fragment>
  );
};

export default SingleWishProduct;
