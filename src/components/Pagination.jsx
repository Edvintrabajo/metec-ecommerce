import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { productsPerPage, next, prev } from "../controllers/products/products.functions";
import { FcNext, FcPrevious } from "react-icons/fc";
function Pagination() {
  const {
    products, setProducts,
    currentTenProducts, setCurrentTenProducts,
    currentPage, setCurrentPage,
    totalPage, setTotalPage,
    currentCategory,
  } = useContext(Context);

  useEffect(() => {
    setTotalPage(Math.ceil(products.length / productsPerPage));
  }, [products]);

  return (
    <nav className="flex w-full justify-center p-4">
      <ul className="flex">
        {currentPage == 1 ? (
          <li>
            <a
              className="mx-1 flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-blue-gray-400 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out"
              aria-label="Previous"
            >
              <span className="material-icons text-sm"><FcPrevious className=""/></span>
            </a>
          </li>
        ) : (
          <li>
            <a
              className="shadow-high-info mx-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-blue-gray-productsPerPage0 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-white"
              aria-label="Previous"
              onClick={() => {
                prev(setProducts, currentTenProducts, setCurrentTenProducts, currentCategory); 
                setCurrentPage(currentPage - 1)}
              }
            >
              <span className="material-icons text-sm"><FcPrevious/></span>
            </a>
          </li>
        )}
        <li>
          <a className="mx-8 flex h-9 items-center justify-center rounded-full bg-info p-0 px-3 text-sm text-white shadow-md transition duration-150 ease-in-out">
            <p>
              Current Page: {currentPage}/{totalPage}
            </p>
          </a>
        </li>
        {currentPage >= totalPage ? (
          <li>
            <a
              className="mx-1 flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-blue-gray-400 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out"
              aria-label="Previous"
            >
              <FcNext />
            </a>
          </li>
        ) : (
          <li>
            <a
              className="shadow-high-info mx-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-white"
              aria-label="Next"
              onClick={() => {
                next(setProducts, currentTenProducts, setCurrentTenProducts, currentCategory);
                setCurrentPage(currentPage + 1)
              }}
            >
              <FcNext/>
            </a>
          </li>
        )}
      </ul>
    </nav>
     
  );
}

export default Pagination;
