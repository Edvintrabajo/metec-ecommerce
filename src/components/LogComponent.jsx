import React from 'react'

function LogComponent({url}) {
  return (
    <div className='absolute top-0 w-[170px] laptop:w-[400px] z-10 laptop:top-[22%] laptop:right-[5%] desktop:top-[28%] desktop:right-[10%] animate-shake-y'>
        <img src={url} alt="" />
    </div>
  )
}

export default LogComponent