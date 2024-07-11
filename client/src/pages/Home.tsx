import React from 'react'

const Home = () => {
  return (
    <div className='h-[200vh] font-inter'>
        <div className='h-[calc(100vh-4rem)] w-full bg-my-orange-10 flex flex-col items-center gap-[2rem] pt-[5rem]'>
            <h1 className='text-[3rem] text-center'>Boost Efficiency, Delight Customers, Enhance Your <span className='block'>Service with MenuNow</span></h1>
            <p className='text-center'>Empower customers, optimize operations, maximize profits. MenuNow - The premier self-ordering solution.</p>
            <button className='border border-my-black-950 bg-my-black-950 rounded-3xl w-[9rem] py-3 text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Home