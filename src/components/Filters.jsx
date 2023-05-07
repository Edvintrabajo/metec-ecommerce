import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { showFilters, hideFilters } from "../controllers/filters/filters.functions";

function Filters() {
  return (
    <div 
      className="absolute top-36 left-10">
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
          <a className=" outline-none" href="/component"><MenuItem>Component</MenuItem></a>
          <a className=" outline-none" href="/computer"><MenuItem>Computer</MenuItem></a>
          <a className=" outline-none" href="/smartphone"><MenuItem>Smartphone</MenuItem></a>
          <a className=" outline-none" href="/tablet"><MenuItem>Tablet</MenuItem></a>
          <a className=" outline-none" href="/tvs"><MenuItem>TVs</MenuItem></a>
          <a className=" outline-none" href="/peripheral"><MenuItem>Peripheral</MenuItem></a>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Filters;
