import React from "react";
import { Fragment, useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { IoAddCircleOutline } from "react-icons/io5";
import AddProduct from "./AddProduct";
export default function AddButton() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <Fragment>
      <button onClick={handleOpen} className="flex justify-between items-center bg-info p-4 h-10 rounded-lg transition-all tablet:w-[100px] hover:bg-white hover:text-info">
        <p className="hidden tablet:block text-sm">Add</p>
        <IoAddCircleOutline className="scale-[1.8]" />
      </button>
      
      <Dialog open={open} handler={handleOpen} size="lg">
        <AddProduct handleOpen={handleOpen} />
      </Dialog>
    </Fragment>
  );
}