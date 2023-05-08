import React from "react";
import { useContext } from "react";
import { Context } from "../context/Context";
import { next } from "../controllers/products/products.functions";

function Pagination() {
  const {
    products,
    setProducts,
    currentPage,
    setCurrentPage,
    totalPage,
    setTotalPage,
    currentCategory,
  } = useContext(Context);

  console.log(totalPage)

  return (
    <>
      {currentCategory == "All" ? (
        <></>
      ) : (
        <nav className="flex w-full justify-center p-4">
          <ul className="flex">
            {currentPage == 1 ? (
              <li>
                <a
                  className="mx-1 flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-blue-gray-400 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out"
                  aria-label="Previous"
                >
                  <span className="material-icons text-sm"> {"<"} </span>
                </a>
              </li>
            ) : (
              <li>
                <a
                  className="mx-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-white"
                  aria-label="Previous"
                  onClick={() => {}}
                >
                  <span className="material-icons text-sm">L</span>
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
            {products.length / 10 >= totalPage ? (
              <li>
                <a
                  className="mx-1  flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-blue-gray-400 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out"
                  aria-label="Previous"
                >
                  <span className="material-icons text-sm">{">"}</span>
                </a>
              </li>
            ) : (
              <li>
                <a
                  className="mx-1 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-white"
                  aria-label="Next"
                  onClick={() => {
                    next(
                      products,
                      setProducts,
                      currentPage,
                      setCurrentPage,
                      setTotalPage,
                      currentCategory
                    );
                  }}
                >
                  <span className="material-icons text-sm">{">"}</span>
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Pagination;
