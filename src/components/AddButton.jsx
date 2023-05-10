import React from "react";
import { Fragment, useState } from "react";
import { Button, Dialog } from "@material-tailwind/react";
import { IoAddCircleOutline } from "react-icons/io5";
import AddProduct from "./AddProduct";

export default function AddButton() {
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient" className="flex justify-between items-center tablet:w-[120px]">
        <p className="hidden tablet:block text-sm">Add</p>
        <IoAddCircleOutline className="scale-[2]" />
      </Button>
      
      <Dialog open={open} handler={handleOpen} size="lg">
        <AddProduct handleOpen={handleOpen} />
      </Dialog>
    </Fragment>
  );
}