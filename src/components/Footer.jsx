import React from 'react'
import { Typography } from "@material-tailwind/react";
import RobotInfo from './RobotInfo';

function Footer() {
  return (
    <div className='w-full p-4 rounded-lg'>
        <footer className="w-full p-8 mt-16 rounded-lg border bg-white border-neutral-400 text-black">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                
                <RobotInfo />
                
                <ul className="text-left tablet:flex tablet:flex-wrap tablet:items-center tablet:gap-y-2 tablet:gap-x-8">
                    <li>
                        <Typography
                        as="a"
                        href="#"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                        About Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        as="a"
                        href="#"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                        Contact Us
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        as="a"
                        href="#"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                        Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                        as="a"
                        href="#"
                        className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                        License
                        </Typography>
                    </li>
                </ul>
            
            </div>
            <hr className="my-8 border-neutral-400" />
            <Typography className="text-center font-normal">
                &copy; 2023 METEC Copyright reserved
            </Typography>
        </footer>
    </div>

  )
}

export default Footer