import React from 'react'

function RobotInfo() {
  return (
    <a href='#' className='relative border border-neutral-400 rounded-full group'>
        <img src="img/robot.png" alt="logo-ct" className="h-[150px] group-hover:animate-shake-y" />
        <div className='absolute -top-20 left-10 bg-blue-500 p-4 w-36 rounded-full transition-all hidden shadow-low-info group-hover:block group-hover:animate-opacity-on'>
            <p className="text-white">Need help? Click me!</p>
        </div>
    </a>
  )
}

export default RobotInfo