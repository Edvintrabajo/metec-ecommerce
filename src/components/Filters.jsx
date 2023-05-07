import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

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
                  className="hidden" />
              <span className="burger-span bg-white block absolute w-full h-1 rounded-lg opacity-100 left-0 top-0 origin-[left, center]"></span>
              <span className="burger-span bg-white block absolute w-full h-1 rounded-lg opacity-100 left-0 top-1/2 origin-[left, center] -translate-y-1/2"></span>
              <span className="burger-span bg-white block absolute w-full h-1 rounded-lg opacity-100 left-0 top-full origin-[left, center] -translate-y-full"></span>
          </label>
        </MenuHandler>
        <MenuList className="mt-2">
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default Filters;
