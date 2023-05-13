import React from 'react'
import { Typography } from '@material-tailwind/react'

function Navlist() {
  return (
    <ul className="m-4 mt-2 flex flex-col gap-2 tablet:mb-0 tablet:mt-0 tablet:flex-row tablet:items-center tablet:gap-5">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/contact" className="flex items-center">
          Contact
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Info
        </a>
      </Typography>
    </ul>
  )
}

export default Navlist