import React, { Fragment, useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HomeContext } from "./index";
import { getAllCategory } from "../../admin/categories/FetchApi";
import { getAllProduct, productByPrice } from "../../admin/products/FetchApi";
import "./style.css";
import { debounce } from "lodash";

const apiURL = process.env.REACT_APP_API_URL;

// const CategoryList = () => {
//   const history = useHistory();
//   const { data } = useContext(HomeContext);
//   const [categories, setCategories] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       let responseData = await getAllCategory();
//       if (responseData && responseData.Categories) {
//         setCategories(responseData.Categories);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className={`${data.categoryListDropdown ? "" : "hidden"} my-4`}>
//       <hr />
//       <div className="py-1 grid grid-cols-2 md:grid-cols-12 lg:grid-cols-15">
//         {categories && categories.length > 0 ? (
//           categories.map((item, index) => {
//             return (
//               <Fragment key={index}>
//                 <div
//                   onClick={(e) =>
//                     history.push(`/products/category/${item._id}`)
//                   }
//                   className="col-span-1 m-2 flex flex-col items-center justify-center space-y-2 cursor-pointer"
//                 >
//                   {/* <img
//                     src={`${apiURL}/uploads/categories/${item.cImage}`}
//                     alt="pic"
//                   /> */}
//                   <div className="font-medium">
//                     <b>
//                       <button
//                         type="button"
//                         class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
//                       >
//                         {item.cName}
//                       </button>
//                       {/* <button>{item.cName}</button> */}
//                     </b>
//                   </div>
//                 </div>
//               </Fragment>
//             );
//           })
//         ) : (
//           <div className="text-xl text-center my-4">No Category</div>
//         )}
//       </div>
//       <hr />
//     </div>
//   );
// };

// const FilterList = () => {
//   const { data, dispatch } = useContext(HomeContext);
//   const [range, setRange] = useState(0);

//   const rangeHandle = (e) => {
//     setRange(e.target.value);
//     fetchData(e.target.value);
//   };

//   const fetchData = async (price) => {
//     if (price === "all") {
//       try {
//         let responseData = await getAllProduct();
//         if (responseData && responseData.Products) {
//           dispatch({ type: "setProducts", payload: responseData.Products });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       dispatch({ type: "loading", payload: true });
//       try {
//         setTimeout(async () => {
//           let responseData = await productByPrice(price);
//           if (responseData && responseData.Products) {
//             console.log(responseData.Products);
//             dispatch({ type: "setProducts", payload: responseData.Products });
//             dispatch({ type: "loading", payload: false });
//           }
//         }, 700);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };

//   const closeFilterBar = () => {
//     fetchData("all");
//     dispatch({ type: "filterListDropdown", payload: !data.filterListDropdown });
//     setRange(0);
//   };

//   return (
//     <div className={`${data.filterListDropdown ? "" : "hidden"} my-4`}>
//       <hr />
//       <div className="w-full flex flex-col">
//         <div className="font-medium py-2">Filter by price</div>
//         <div className="flex justify-between items-center">
//           <div className="flex flex-col space-y-2 py-3 w-2/3 lg:w-2/4">
//             <label htmlFor="points" className="text-sm">
//               Price (between 0-1000000Rs):{" "}
//               <span className="font-semibold text-yellow-700">
//                 {range}.00 Rs
//               </span>{" "}
//             </label>
//             <input
//               value={range}
//               className="slider py-3 rounded-full"
//               type="range"
//               id="points"
//               min="0"
//               max="1000000"
//               step="10"
//               onChange={(e) => rangeHandle(e)}
//             />
//           </div>
//           <div onClick={(e) => closeFilterBar()} className="cursor-pointer">
//             {/* <svg
//               className="w-8 h-8 text-gray-700 hover:bg-gray-200 rounded-full p-1"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg> */}
//             <b>RESET</b>
//           </div>
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// };

const Search = () => {
  const { data, dispatch } = useContext(HomeContext);
  const [search, setSearch] = useState("");
  const [productArray, setPa] = useState(null);




  const searchHandle = (e) => {
    setSearch(e.target.value);
    let timer;
    clearTimeout(timer);
    // timer = setTimeout(() => {
      fetchData();
      console.log("clicked it");
      dispatch({
        type: "searchHandleInReducer",
        payload: e.target.value,
        productArray: productArray,
      });
    // },5000);

    


  };

  const fetchData = async () => {
    dispatch({ type: "loading", payload: true });
    try {
      // setTimeout(async () => {
        let responseData = await getAllProduct();
        if (responseData && responseData.Products) {
          setPa(responseData.Products);
          dispatch({ type: "loading", payload: false });
        }
      // }, 200);
    } catch (error) {
      console.log(error);
    }
  };



  const closeSearchBar = () => {
    dispatch({ type: "searchDropdown", payload: !data.searchDropdown });
    fetchData();
    dispatch({ type: "setProducts", payload: productArray });
    setSearch("");
  };


    // const handleSearchChange = (e) => {
    //   const searchTerm = e.target.value;
    //   setSearch(searchTerm);
    //   debouncedSearch(searchTerm);
    // };


  return (
    <div
      className="my-4"
      // className={`${
      //   data.searchDropdown ? "" : "hidden"
      // } my-4 flex items-center justify-between`}
    >
      <input
        value={search}
        onChange={(e) => searchHandle(e)}
        // onChange={handleSearchChange}
        className="px-4 text-xl py-1 focus:outline border-2 w-full rounded-full"
        type="text"
        placeholder="Search products..."
      />
      {/* <div onClick={(e) => closeSearchBar()} className="cursor-pointer">
        <svg
          className="w-8 h-8 text-gray-700 hover:bg-gray-200 rounded-full p-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div> */}
    </div>
  );
};

const ProductCategoryDropdown = (props) => {
  return (
    <Fragment>
      <Search />
      {/* <CategoryList /> */}
      {/* <FilterList /> */}
 
    </Fragment>
  );
};

export default ProductCategoryDropdown;
