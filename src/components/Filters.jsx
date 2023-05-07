import React, { useContext } from "react";
import { Context } from "../context/Context";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { showFilters, hideFilters } from "../controllers/filters/filters.functions";
import { getProductsByCategory } from "../controllers/products/products.functions";
function Filters() {

  const { setProducts, setCurrentCategory } = useContext(Context);

  return (
    <div 
      className="absolute top-36 left-10 mt-1">
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
              className="relative w-10 h-8 bg-transparent cursor-pointer block " 
              htmlFor="burger">
              <input 
                  type="checkbox" 
                  id="burger"
                  className="hidden" 
                  onClick={() => {showFilters('filter-container')}}
                  />
              <span className="burger-span bg-white block absolute w-full h-1 rounded-lg opacity-100 left-0 top-0 origin-[left, center]"></span>
              <span className="burger-span bg-white block absolute w-full h-1 rounded-lg opacity-100 left-0 top-1/2 origin-[left, center] -translate-y-1/2"></span>
              <span className="burger-span bg-white block absolute w-full h-1 rounded-lg opacity-100 left-0 top-full origin-[left, center] -translate-y-full"></span>
          </label>
        </MenuHandler>
        <MenuList className="mt-2">
          <MenuItem onClick={() => {hideFilters('filter-container'),getProductsByCategory(setProducts, "Component"), setCurrentCategory("Component")}}>Component</MenuItem>
          <MenuItem onClick={() => {hideFilters('filter-container'),getProductsByCategory(setProducts, "Computer"), setCurrentCategory("Computer")}}>Computer</MenuItem>
          <MenuItem onClick={() => {hideFilters('filter-container'),getProductsByCategory(setProducts, "Smartphone"), setCurrentCategory("Smartphone")}}>Smartphone</MenuItem>
          <MenuItem onClick={() => {hideFilters('filter-container'),getProductsByCategory(setProducts, "Tablet"), setCurrentCategory("Tablet")}}>Tablet</MenuItem>
          <MenuItem onClick={() => {hideFilters('filter-container'),getProductsByCategory(setProducts, "TV"), setCurrentCategory("TV")}}>TVs</MenuItem>
          <MenuItem onClick={() => {hideFilters('filter-container'),getProductsByCategory(setProducts, "Peripheral"), setCurrentCategory("Peripheral")}}>Peripheral</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Filters;
