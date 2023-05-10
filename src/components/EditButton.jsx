import React, { Fragment, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { Dialog } from "@material-tailwind/react";
import EditProduct from "./EditProduct";

function EditButton({product}) {

    const [open, setOpen] = useState(false);
 
    const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
        <button onClick={handleOpen} className="mr-2 flex rounded-full border-2 border-edit p-2 text-edit shadow-low-edit transition-all hover:bg-edit hover:text-white hover:shadow-high-edit">
            <MdModeEdit />
        </button>

        <Dialog open={open} handler={handleOpen} size="lg">
            <EditProduct handleOpen={handleOpen} product={product}/>
        </Dialog>
    </Fragment>

  )
}

export default EditButton