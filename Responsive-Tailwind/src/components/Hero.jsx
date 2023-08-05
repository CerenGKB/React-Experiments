import React from "react";
import Typed from 'react-typed'

const Hero = () => {

    return (
        <div className='text-white'> 
            <div className='max-w-[800px] mt-[-96px] w-full h-screen  mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold md:text-xl text-l p-0.5'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6 py-3'>Grow with data.</h1>
                <div className="flex justify-center items-center ">
                    <p className='md:text-4xl sm:text-4xl text-xl font-bold'>Fast,flexible financing for </p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={['BTB','BTC','SASS']} 
                    typeSpeed={120}
                    backSpeed={140}
                    loop/>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 p-4'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero