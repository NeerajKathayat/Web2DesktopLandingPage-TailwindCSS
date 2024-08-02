import React from 'react'

const PricingSection = () => {
    return (
        <div className='font-display p-7 mt-20 flex flex-col gap-4 max-w-[1536px] mx-auto'>
            <h1 className='text-5xl font-medium leading-normal max-w-[640px] mx-auto lg:mx-0'>Choose a plan that fits your needs</h1>

            <div className='flex flex-col gap-5 lg:flex-row'>
              
                <div className='border border-gray-300 rounded-lg px-7 py-10 flex flex-col flex-1 gap-4 w-full max-w-[640px] mx-auto'>
                    <h1 className='text-3xl font-medium'>Free</h1>
                    <p className='text-[18px] font-light'>For personal use or testing your app before deploying to customers.</p>
                    <p className='text-[20px]'>Key Features</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                    </div>

                    <button className='text-primary font-medium border border-gray-300 hover:border-black py-3 rounded-lg'>Read Docs</button>
                </div>


                <div className='border border-gray-300 rounded-lg px-7 py-10 flex flex-col flex-1 gap-4 w-full max-w-[640px] mx-auto'>
                    <h1 className='text-3xl font-medium'>Essential</h1>
                    <p className='text-[18px] font-light'>For simple desktop apps.</p>
                    <p className='text-[18px] font-light'><span className='text-2xl font-semibold'>$99</span>/month</p>
                    <p className='text-[20px]'>Key Features</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                    </div>

                    <button className='text-primary font-medium border border-gray-300 hover:border-black py-3 rounded-lg'>Read Docs</button>
                </div>

                <div className='border border-gray-300 rounded-lg px-7 py-10 flex flex-col flex-1 gap-4 w-full max-w-[640px] mx-auto'>
                    <h1 className='text-3xl font-medium'>Professional</h1>
                    <p className='text-[18px] font-light'>For sophisticated desktop apps.</p>
                    <p className='text-[18px] font-light'><span className='text-2xl font-semibold'>$99</span>/month</p>
                    <p className='text-[20px]'>Key Features</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-check text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <i class="fa-solid fa-xmark text-gray-500"></i>
                            <p className='text-xl font-light'>Free for personal use </p>
                        </div>
                    </div>

                    <button className='bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-lg'>Read Docs</button>
                </div>
            </div>

        </div>
    )
}

export default PricingSection
