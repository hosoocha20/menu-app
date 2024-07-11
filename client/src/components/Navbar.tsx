import React from 'react'

const Navbar = () => {
  return (
    <div className='px-[5rem] py-[2.5rem] font-inter w-full h-[4rem] bg-my-orange-10 sticky top-0 flex justify-between items-center'>
        <div className='flex-1   font-cabin text-my-black-950 text-[1.2rem] font-[500]'>
            MenuNow
        </div>
        <div className='flex-1   flex justify-center gap-[3.2rem] tracking-wider font-[400] text-base text-my-black-950'>
            <p className=' px-2'>About</p>
            <p className=' px-2'>Features</p>
            <p className=' px-2'>Contact</p>
        </div>
        <div className='flex-1  flex justify-end gap-[3.2rem] tracking-wider font-[400] text-base text-my-black-950'>
            <button className=' '>Login</button>
            <button className='border border-my-black-950 bg-my-black-950 rounded-3xl px-5 py-3 text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar