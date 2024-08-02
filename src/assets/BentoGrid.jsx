import React from 'react'
import asset37 from '../images/asset 37.png'
import asset38 from '../images/asset 38.png'
import asset39 from '../images/asset 39.png'
import asset40 from '../images/asset 40.png'
const BentoGrid = () => {
    return (
        <div className='flex flex-col gap-20 p-7 mt-28 font-body max-w-[1536px] mx-auto'>
            <div className='max-w-[720px]'>
                <h1 className='text-5xl font-semibold leading-normal'>ToDesktop handles the<br/> details</h1>
            </div>



            <div className='flex flex-col lg:grid gap-6 lg:grid-cols-3'  style={{'gridAutoRows':'96px'}}>
                <div className='group lg:row-start-1 lg:row-end-3 rounded-2xl p-[1px] bg-slate-300 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 w-full max-w-[720px] mx-auto '>
                    <div className='bg-slate-50 h-full w-full rounded-2xl p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 '>
                        <h1 className='text-2xl font-medium'>Native Notifications</h1> 
                        <img src={asset37} alt="" />
                    </div>
                </div>

                <div className='group lg:row-start-1 lg:row-end-4 rounded-2xl p-[1px] bg-slate-300 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 w-full max-w-[720px] mx-auto'>
                    <div className='bg-slate-50 h-full w-full rounded-2xl p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 '>
                        <h1 className='text-2xl font-medium'>Native Notifications</h1> 
                        <p className='text-lg text-center font-light'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset38} alt="" />
                    </div>
                </div>

                <div className='group lg:row-start-1 lg:row-end-3 rounded-2xl p-[1px] bg-slate-300 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 w-full max-w-[720px] mx-auto'>
                    <div className='bg-slate-50 h-full w-full rounded-2xl p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 '>
                        <h1 className='text-2xl font-medium'>Native Notifications</h1> 
                        <img src={asset39} alt="" />
                    </div>
                </div>


                <div className='group lg:row-start-3 lg:row-end-6 rounded-2xl p-[1px] bg-slate-300 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 w-full max-w-[720px] mx-auto'>
                    <div className='bg-slate-50 h-full w-full rounded-2xl p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 '>
                        <h1 className='text-2xl font-medium'>Native Notifications</h1> 
                        <p className='text-lg text-center font-light'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset40} alt="" />
                    </div>
                </div>

                <div className='group lg:row-start-4 lg:row-end-6 rounded-2xl p-[1px] bg-slate-300 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 w-full max-w-[720px] mx-auto'>
                    <div className='bg-slate-50 h-full w-full rounded-2xl p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 '>
                        <h1 className='text-2xl font-medium'>Native Notifications</h1> 
                        <img src={asset37} alt="" />
                    </div>
                </div>

                <div className='group lg:row-start-3 lg:row-end-6 rounded-2xl p-[1px] bg-slate-300 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 max-w-[720px] mx-auto'>
                    <div className='bg-slate-50 h-full w-full rounded-2xl p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 '>
                        <h1 className='text-2xl font-medium'>Native Notifications</h1> 
                        <p className='text-lg text-center font-light'>We’ll ensure the underlying browser is up to date and deliver performance improvements, security patches, & additional features.</p>
                        <img src={asset38} alt="" />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default BentoGrid
