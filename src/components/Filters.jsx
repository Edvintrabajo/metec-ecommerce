import React, { useContext } from "react";
import { Context } from "../context/Context";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  showFilters,
  hideFilters,
} from "../controllers/filters/filters.functions";
import {
  getProductsByCategory,
  getProducts,
  getTrendingTop,
} from "../controllers/products/products.functions";
function Filters() {
  const {
    setProducts,
    setCurrentCategory,
    setCurrentTenProducts,
    setCurrentPage,
  } = useContext(Context);

  return (
    <div className="absolute top-44 left-10 mt-1">
      <Menu
        placement="bottom-start"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <MenuHandler>
          <label
            id="burger-container"
            className="relative block h-8 w-10 cursor-pointer bg-transparent "
            htmlFor="burger"
          >
            <input
              type="checkbox"
              id="burger"
              className="hidden"
              onClick={() => {
                showFilters("filter-container");
              }}
            />
            <span className="burger-span origin-[left, center] absolute left-0 top-0 block h-1 w-full rounded-lg bg-white opacity-100"></span>
            <span className="burger-span origin-[left, center] absolute left-0 top-1/2 block h-1 w-full -translate-y-1/2 rounded-lg bg-white opacity-100"></span>
            <span className="burger-span origin-[left, center] absolute left-0 top-full block h-1 w-full -translate-y-full rounded-lg bg-white opacity-100"></span>
          </label>
        </MenuHandler>
        <MenuList className="mt-2">
          <MenuItem
            onClick={() => {
              hideFilters("filter-container"),
              setCurrentCategory("All");
              getProducts(setProducts, setCurrentTenProducts),
              setCurrentPage(1);
            }}
          >
            All
          </MenuItem>
          <MenuItem
            onClick={() => {
              hideFilters("filter-container"),
              setCurrentCategory("Trending Top");
              getTrendingTop(setProducts, setCurrentTenProducts),
              setCurrentPage(1);
            }}
          >
            Trending Top
          </MenuItem>
          <hr
            onClick={() => {
              hideFilters("filter-container");
            }}
            className="my-2 outline-none"
          />
          <MenuItem
            onClick={() => {
              hideFilters("filter-container"),
              setCurrentCategory("Component"),
              getProductsByCategory(
                setProducts,
                "Component",
                setCurrentTenProducts
              ),
              setCurrentPage(1);
            }}
          >
            Component
          </MenuItem>
          <MenuItem
            onClick={() => {
              hideFilters("filter-container"),
              setCurrentCategory("Computer");
              getProductsByCategory(
                setProducts,
                "Computer",
                setCurrentTenProducts
              ),
              setCurrentPage(1);
            }}
          >
            Computer
          </MenuItem>
          <MenuItem
            onClick={() => {
              hideFilters("filter-container"),
              setCurrentCategory("Smartphone");
              getProductsByCategory(
                setProducts,
                "Smartphone",
                setCurrentTenProducts
              ),
              setCurrentPage(1);
            }}
          >
            Smartphone
          </MenuItem>
          <MenuItem
            onClick={() => {
              hideFilters("filter-container"),
              setCurrentCategory("Tablet");
              getProductsByCategory(
                setProducts,
                "Tablet",
                setCurrentTenProducts
              ),
              setCurrentPage(1);
            }}
          >
            Tablet
          </MenuItem>
          <MenuItem
            onClick={() => {
              hideFilters("filter-container"),
              setCurrentCategory("TV");
              getProductsByCategory(
                setProducts, 
                "TV",
                setCurrentTenProducts),
              setCurrentPage(1);
          }}
          >
            TVs
          </MenuItem>
          <MenuItem
            onClick={() => {
              hideFilters("filter-container"),
              setCurrentCategory("Peripheral");
              getProductsByCategory(
                setProducts,
                "Peripheral",
                setCurrentTenProducts
              ),
              setCurrentPage(1);
            }}
          >
            Peripheral
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Filters;
