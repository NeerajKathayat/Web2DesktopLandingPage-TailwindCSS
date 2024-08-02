import React, { useState } from 'react'

const FAQSection = () => {

    const [ActiveIndex, setActiveIndex] = useState(null)

    const Faqs = [
        {
            question: "Is ToDesktop For Me?",
            answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        },
        {
            question: "Is ToDesktop For Me?",
            answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        },
        {
            question: "Is ToDesktop For Me?",
            answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        },
        {
            question: "Is ToDesktop For Me?",
            answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        },
        {
            question: "Is ToDesktop For Me?",
            answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        },
        {
            question: "Is ToDesktop For Me?",
            answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you."
        }
    ]

    return (
        <div className='p-7 mt-20 flex flex-col gap-9 max-w-[1536px] mx-auto'>
            <h1 className='text-5xl font-medium font-display'>FAQs</h1>

            <div className='flex flex-col gap-3 font-body md:grid md:grid-cols-2 md:gap-5'>

                {
                    Faqs.map((ele, index) => (
                        <div>
                            <div key={index} className='border bg-slate-50 transition px-6 py-3  rounded-xl flex flex-col justify-center  overflow-hidden'>
                            <div className='flex justify-between items-center  cursor-pointer my-[13px]' onClick={() => { setActiveIndex(ActiveIndex == index ? null : index) }}>
                                <h1 className="text-[18px] font-medium">{ele.question}</h1>
                                <i class={ActiveIndex == index ? "fa-solid fa-chevron-up transition duration-300" : "fa-solid fa-chevron-up -rotate-180 transition duration-300"}></i>
                            </div>

                            
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${ActiveIndex === index ? 'max-h-[1000px] ' : 'max-h-[0px] '}`}
                            >
                                <p className='text-[18px] font-light'>{ele.answer}</p>
                            </div>

                        </div>
                        </div>
                    
                    ))
                }


            </div>


        </div>
    )
}

export default FAQSection
