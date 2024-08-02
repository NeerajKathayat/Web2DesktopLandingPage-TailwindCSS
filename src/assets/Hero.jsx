import React,{useRef,useEffect} from 'react'
import asset2 from '../images/asset 2.svg'
import asset3 from '../images/asset 3.png'
import asset4 from '../images/asset 4.png'
import asset5 from '../images/asset 5.png'
import asset6 from '../images/asset 6.png'
import asset7 from '../images/asset 7.png'
import asset8 from '../images/asset 8.png'
import asset9 from '../images/asset 9.png'
import asset10 from '../images/asset 10.png'
import asset11 from '../images/asset 11.png'
import asset12 from '../images/asset 12.png'
import asset13 from '../images/asset 13.png'
import asset14 from '../images/asset 14.png'
import asset15 from '../images/asset 15.png'
import asset16 from '../images/asset 16.png'
import asset17 from '../images/asset 17.png'
import asset18 from '../images/asset 18.png'
import asset19 from '../images/asset 19.png'
import asset20 from '../images/asset 20.png'
import asset21 from '../images/asset 21.png'
import asset22 from '../images/asset 22.png'
import asset23 from '../images/asset 23.png'
import asset24 from '../images/asset 24.png'
import asset25 from '../images/asset 25.png'
import asset26 from '../images/asset 26.png'

const Hero = () => {
  
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
  
    useEffect(() => {
      const initialTranslateLTR = -48 * 4;
      const initialTranslateRTL = 36 * 4;
  
      function setupIntersectionObserver(element, isLTR, speed) {
        const intersectionCallback = (entries) => {
          const isIntersecting = entries[0].isIntersecting;
          if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler);
          } else {
            document.removeEventListener('scroll', scrollHandler);
          }
        };
  
        const intersectionObserver = new IntersectionObserver(intersectionCallback);
        intersectionObserver.observe(element);
  
        function scrollHandler() {
          const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
          let totalTranslate = 0;
          if (isLTR) {
            totalTranslate = translateX + initialTranslateLTR;
          } else {
            totalTranslate = -(translateX + initialTranslateRTL);
          }
          element.style.transform = `translateX(${totalTranslate}px)`;
        }
  
        // Clean up function to remove the scroll event listener
        return () => {
          document.removeEventListener('scroll', scrollHandler);
        };
      }
  
      if (line1Ref.current) {
        setupIntersectionObserver(line1Ref.current, true, 0.15);
      }
      if (line2Ref.current) {
        setupIntersectionObserver(line2Ref.current, false, 0.15);
      }
      if (line3Ref.current) {
        setupIntersectionObserver(line3Ref.current, true, 0.15);
      }
  
    }, []);

    return (
        <div className=' bg-gradient-to-b from-purple-50 via-orange-50 to-transparent min-h-screen font-body '>

           <div className='flex flex-col gap-[50px] max-w-[1536px] py-9 mt-10  mx-auto'>
           <div className='px-7 mt-10 flex flex-col gap-[50px] md:items-center'>
                <div className='flex justify-center items-baseline gap-[6px] text-[16px] w-fit shadow-lg hover:shadow-xl  bg-yellow-50 border-[1.5px] border-yellow-400 rounded-lg hover:-translate-y-1 transition group py-1 px-3'>
                    <div className='h-[11px] w-[11px] bg-yellow-200 border-2 border-yellow-600  rounded-full'></div>
                    <p className='text-yellow-600 font-semibold'>v0.21.1:</p>
                    <p className='text-amber-800  font-semibold pr-[2px]'>Find-in-page bug fixes</p>
                    <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition "></i>
                </div>

                <div className='text-gray-500 md:flex gap-8 text-lg hidden'>
                   <div className='flex gap-2 items-center'>
                   <i class="fa-regular fa-file-code text-sm"></i>
                   <p>Code Optional</p>
                   </div>

                 <div className='flex gap-2 items-center'>
                 <i class="fa-solid fa-hand-back-fist"></i>
                 <p>Drag & drop builder</p>
                 </div>

                    <div className='flex gap-2 items-center'>
                    <i class="fa-solid fa-laptop"></i>
                    <p>Windows, Mac, Linux</p>
                    </div>
                </div>

                <div className='flex flex-col gap-[15px] md:gap-[40px] text-center max-w-[620px]'>
                    <h1 className='text-4xl font-bold leading-tight md:text-[62px]'>Web app to desktop app in minutes</h1>

                    <p className='text-xl md:text-2xl'>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
                </div>

                <div className='flex flex-col gap-6 md:flex-row'>
                    <button className='bg-primary text-white py-3 px-8 font-semibold rounded-lg '>Download now</button>
                    <button className='bg-white py-3 px-8 border-[1.6px] border-gray-300 font-semibold rounded-lg '>Read Docs</button>
                </div>
            </div>

            <div className='flex flex-col gap-8'>
                <div className='flex justify-center'>
                    <img src={asset2} alt="" />
                    <h1>APPS POWERED BY TODESKTOP </h1>
                    <img className='-scale-x-100' src={asset2} alt="" />
                </div>

                <div className='flex flex-col gap-4 overflow-x-hidden'>
                    <div ref={line1Ref} className=' flex gap-4 -translate-x-48 transition-transform ease-linear'>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset3} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset4} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset5} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset6} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset7} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset8} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset9} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset10} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset11} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset12} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset13} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset14} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>

                    </div>



                    <div ref={line2Ref} className='flex gap-4 -translate-x-36 transition-transform ease-linear'>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset15} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>Unbounce1</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset16} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset17} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>Morgen</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset18} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>Campsite</p>
                        </div>
                        <div className='flex flex-col   gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset19} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>Rise</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset20} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>ClickUp</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset21} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>Notion</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset22} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>Sunsama</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset23} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset24} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>Beeper</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset25} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>Cal</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset26} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>Webstudio</p>
                        </div>

                    </div>




                    <div ref={line3Ref} className='flex gap-4 -translate-x-48 transition-transform ease-linear'>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset15} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset16} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset17} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset3} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset4} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset5} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset12} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset13} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset14} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset24} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset25} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>
                        <div className='flex flex-col gap-2 items-center bg-white border-[1.5px] border-gray-300 rounded-xl justify-center  min-w-24 min-h-24  md:min-w-32 md:min-h-32'>
                            <img className='w-12 h-12 md:w-16 md:h-16' src={asset26} alt="" />
                            <p className='text-sm lg:text-[16px] font-semibold'>LifeAt</p>
                        </div>

                    </div>
                </div>
            </div>
            
             </div>


        </div>
    )
}

export default Hero
