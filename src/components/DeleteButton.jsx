import React, { Fragment, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Dialog } from "@material-tailwind/react";
import DeleteProduct from "./DeleteProduct";

function DeleteButton({product}) {
    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);
  return (
    <Fragment>
        <button onClick={handleOpen} className="flex rounded-full border-2 border-danger p-2 text-danger shadow-low-danger transition-all hover:bg-danger hover:text-white hover:shadow-high-danger">
            <BsFillTrashFill />
        </button>

        <Dialog open={open} handler={handleOpen} size="md">
            <DeleteProduct handleOpen={handleOpen} product={product}/>
        </Dialog>
    </Fragment>
    
  )
}

export default DeleteButton