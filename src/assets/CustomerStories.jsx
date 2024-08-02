import React from 'react'
import asset44 from '../images/asset 44.svg'
import asset45 from '../images/asset 45.jpeg'
import asset46 from '../images/asset 46.png'
import asset48 from '../images/asset 48.jpeg'
import asset47 from '../images/asset 47.png'
const CustomerStories = () => {
    return (
        <div className='font-body p-7 mt-20 flex flex-col gap-16 max-w-[1536px] mx-auto'>

            <div className='max-w-[750px]  mx-auto flex flex-col gap-16  lg:max-w-full '>
                <div >
                    <h1 className='text-5xl font-semibold'>Customer stories</h1>
                </div>

                <div className='border-[1.6px] border-gray-200 rounded-xl  flex flex-col lg:flex-row '>

                    <div className='flex flex-col gap-8 p-8'>
                        <div>
                            <img src={asset44} alt="" />
                        </div>

                        <p className='text-[22px] font-medium'>ClickUp used ToDesktop to get their desktop app in front of customers in days instead of months.</p>

                        <div className='flex gap-3 flex-wrap'>
                            <div className='flex justify-center items-baseline gap-[6px] text-[16px] w-fit bg-yellow-50 border-[1.5px] border-yellow-400 rounded-lg  py-1 px-3 '>
                                <i class="fa-solid fa-check text-amber-800 "></i>
                                <p className='text-amber-800 font-semibold pr-[2px]'>Chromeless UI</p>
                            </div>

                            <div className='flex justify-center items-baseline gap-[6px] text-[16px] w-fit bg-yellow-50 border-[1.5px] border-yellow-400 rounded-lg  py-1 px-3 '>
                                <i class="fa-solid fa-check text-amber-800 "></i>
                                <p className='text-amber-800 font-semibold pr-[2px]'>Native spellcheck </p>
                            </div>

                            <div className='flex justify-center items-baseline gap-[6px] text-[16px] w-fit bg-yellow-50 border-[1.5px] border-yellow-400 rounded-lg  py-1 px-3 '>
                                <i class="fa-solid fa-check text-amber-800 "></i>
                                <p className='text-amber-800 font-semibold pr-[2px]'>Task time in menubar</p>
                            </div>

                            <div className='flex justify-center items-baseline gap-[6px] text-[16px] w-fit bg-yellow-50 border-[1.5px] border-yellow-400 rounded-lg  py-1 px-3 '>
                                <i class="fa-solid fa-check text-amber-800 "></i>
                                <p className='text-amber-800 font-semibold pr-[2px]'>Notification count in the dock</p>
                            </div>

                            <div className='flex justify-center items-baseline gap-[6px] text-[16px] w-fit bg-yellow-50 border-[1.5px] border-yellow-400 rounded-lg  py-1 px-3 '>
                                <i class="fa-solid fa-check text-amber-800 "></i>
                                <p className='text-amber-800 font-semibold pr-[2px]'>Global hotkey to create task </p>
                            </div>
                        </div>

                        <p className='text-[18px] font-light text-gray-500'>“ToDesktop provided us with a <span className='text-black'>polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span className='text-black'>new and improved features</span> to our customers within days.”</p>

                        <div className='flex gap-4'>
                            <img className='rounded-full' src={asset45} alt="" />
                            <div className='flex flex-col '>
                                <p>Zeb Evans</p>
                                <p className='text-gray-500 '>Founder & CEO, ClickUp</p>
                            </div>
                        </div>
                    </div>

                    <div className='pl-11 self-end'>
                        <img src={asset46} alt="" />
                    </div>

                </div>
            </div>


            <div className='flex flex-col gap-4 lg:flex-row'>

                <div className='group lg:row-start-1 lg:row-end-3 rounded-2xl p-[1px] bg-slate-300 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 max-w-[750px] mx-auto'>
                    <div className='bg-slate-50 h-full w-full rounded-2xl p-7 flex flex-col gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 '>

                        <div className='flex gap-3 items-center'>
                            <div className='bg-blue-200 w-12 h-12 rounded-full flex justify-center items-center'>
                                <i class="fa-solid fa-code text-indigo-800"></i>
                            </div>
                            <h1 className='text-2xl font-semibold'>Native APIs</h1>
                        </div>

                        <p className='text-[17px] font-light'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>

                        <div className='flex'>
                            <div className='flex'>
                                <div class="w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img className='min-w-16 min-h-16' src={asset47} alt="" />
                                </div>

                                <div class="-ml-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img className='min-w-16 min-h-16' src={asset48} alt="" />
                                </div>
                            </div>

                            <div>
                                <p>Rick Pastoor</p>
                                <p className=''>Rise</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='group lg:row-start-1 lg:row-end-3 rounded-2xl p-[1px] bg-slate-300 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 max-w-[750px] mx-auto'>
                    <div className='bg-slate-50 h-full w-full rounded-2xl p-7 flex flex-col gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 '>

                        <div className='flex gap-3 items-center'>
                            <div className='bg-blue-200 w-12 h-12 rounded-full flex justify-center items-center'>
                                <i class="fa-solid fa-code text-indigo-800"></i>
                            </div>
                            <h1 className='text-2xl font-semibold'>Native APIs</h1>
                        </div>

                        <p className='text-[17px] font-light'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>

                        <div className='flex'>
                            <div className='flex'>
                                <div class="w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img className='min-w-16 min-h-16' src={asset47} alt="" />
                                </div>

                                <div class="-ml-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img className='min-w-16 min-h-16' src={asset48} alt="" />
                                </div>
                            </div>

                            <div>
                                <p>Rick Pastoor</p>
                                <p className=''>Rise</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='group lg:row-start-1 lg:row-end-3 rounded-2xl p-[1px] bg-slate-300 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 max-w-[750px] mx-auto'>
                    <div className='bg-slate-50 h-full w-full rounded-2xl p-7 flex flex-col gap-6 group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 '>

                        <div className='flex gap-3 items-center'>
                            <div className='bg-blue-200 w-12 h-12 rounded-full flex justify-center items-center'>
                                <i class="fa-solid fa-code text-indigo-800"></i>
                            </div>
                            <h1 className='text-2xl font-semibold'>Native APIs</h1>
                        </div>

                        <p className='text-[17px] font-light'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>

                        <div className='flex'>
                            <div className='flex'>
                                <div class="w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img className='min-w-16 min-h-16' src={asset47} alt="" />
                                </div>

                                <div class="-ml-3 w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                    <img className='min-w-16 min-h-16' src={asset48} alt="" />
                                </div>
                            </div>

                            <div>
                                <p>Rick Pastoor</p>
                                <p className=''>Rise</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>



            <div className='border-[1.6px] border-black bg-black rounded-xl  flex flex-col max-w-[750px] mx-auto lg:max-w-full'>

                <div className='flex flex-col gap-5 px-8 py-12'>

                    <p className='text-[17px] font-medium text-gray-400'>READY TO START BUILDING?</p>

                    <h1 className='text-4xl font-semibold text-white'>Create your desktop app for free*</h1>

                    <p className='text-[18px] text-gray-500'>ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>

                    <button className='bg-primary hover:bg-opacity-90  text-white py-3 flex gap-3 justify-center items-center rounded-lg'>
                        <i class="fa-solid fa-download "></i>
                        <span>Download ToDesktop Builder</span>
                    </button>

                    <p className='text-gray-400 text-xs italic'>*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
                </div>

                <div className='pl-11'>
                    <img src={asset46} alt="" />
                </div>

            </div>

        </div>
    )
}

export default CustomerStories
