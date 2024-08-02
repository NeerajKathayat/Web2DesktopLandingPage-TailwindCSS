import React, { useState } from 'react'
import asset0 from '../images/asset 0.png'
import asset1 from '../images/asset 1.svg'
const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <nav className='fixed z-10 top-0 right-0 left-0 bg-white flex justify-between items-center font-display  p-3 border-b-2 shadow-md'>
            <div className='flex items-center gap-[10px]'>
                <img src={asset0} alt="" />
                <p className='text-[19px] font-medium font-display letter'>ToDesktop</p>
            </div>
            <div className='pr-2 lg:hidden cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
                <i className="fa-solid fa-bars"></i>
            </div>



            <ul className='hidden  lg:flex gap-10'>
                <li className='font-medium hover:text-primary cursor-pointer'>Pricing</li>
                <li className='font-medium hover:text-primary cursor-pointer'>Docs</li>
                <li className='font-medium hover:text-primary cursor-pointer'>Changelog</li>
                <li className='font-medium hover:text-primary cursor-pointer'>Blogs</li>
                <li className='font-medium hover:text-primary cursor-pointer'>Login</li>
            </ul>


            <div className='hidden lg:flex gap-2 py-2 px-6 items-center border border-gray-600 rounded-lg cursor-pointer'>

                <img src={asset1} alt="" />
                <p className='font-medium'>Electron Developers</p>
                <i class="fa-solid fa-arrow-right"></i>

            </div>



            {isOpen && (
                <div className='fixed inset-0 bg-white p-3 z-10'>

                <div className='flex justify-between items-center'>

                    <div className='flex items-center gap-[10px]'>
                        <img src={asset0} alt="" />
                        <p className='text-[19px] font-medium font-display letter'>ToDesktop</p>
                    </div>
                    <div className='pr-2 lg:hidden cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
                        <i class="fa-solid fa-xmark text-gray-500"></i>
                    </div>
                </div>


                <ul className='flex flex-col gap-8 p-8'>
                    <li className='font-medium hover:text-primary cursor-pointer'>Pricing</li>
                    <li className='font-medium hover:text-primary cursor-pointer'>Docs</li>
                    <li className='font-medium hover:text-primary cursor-pointer'>Changelog</li>
                    <li className='font-medium hover:text-primary cursor-pointer'>Blogs</li>
                    <li className='font-medium hover:text-primary cursor-pointer'>Login</li>
                </ul>

                <div className='w-full h-[1px] bg-gray-300'></div>


                <div className='flex gap-2 py-8 px-6 items-cente cursor-pointer'>

                    <img src={asset1} alt="" />
                    <p className='font-medium'>Electron Developers</p>
                   

                </div>
            </div>
            )}




            
        </nav>
    )
}

export default NavBar
