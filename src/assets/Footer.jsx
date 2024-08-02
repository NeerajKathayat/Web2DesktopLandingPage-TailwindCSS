import React from 'react'
import asset0 from '../images/asset 0.png'
import asset54 from '../images/asset 54.svg'
const Footer = () => {
    return (
        <footer className='font-body p-7 mt-28 mb-[10px] flex flex-col gap-10 max-w-[1536px] mx-auto'>
            <div className='border border-gray-300 md:border-gray-50 cursor-pointer rounded-lg bg-slate-50 flex flex-col gap-6 items-center p-12 md:flex-row-reverse md:justify-between'>
                <div className='flex flex-col items-center gap-6 md:flex-row-reverse'>
                    <p>Documentation</p>
                    <div className='flex gap-7'>
                        <i class="fa-brands fa-twitter text-gray-600 hover:text-gray-900"></i>

                        <i class="fa-brands fa-github text-gray-600 hover:text-gray-900"></i>
                    </div>
                </div>


                <div className='flex items-center gap-[10px]'>
                    <img src={asset0} alt="" />
                    <p className='text-[19px] font-medium font-display letter'>ToDesktop</p>
                </div>
            </div>



            <div className='flex flex-col gap-5 items-center'>
                <div className='flex gap-3'>
                    <img className='w-5 ' src={asset54} alt="" />
                    <span className='text-sm text-gray-600'>A Y Combinator company.</span>
                </div>

                <div className='text-gray-400 text-sm'>© 2024 ToDesktop, Inc. All rights reserved.</div>
            </div>

        </footer>
    )
}

export default Footer
