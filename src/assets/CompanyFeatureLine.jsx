import React, { useRef,useEffect } from 'react'

const CompanyFeatureLine = () => {

      
    const line4Ref = useRef(null);

    useEffect(() => {
      const initialTranslateLTR = -48 * 4;
  
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
  
      if (line4Ref.current) {
        setupIntersectionObserver(line4Ref.current, true, 0.8);
      }
  
    }, []);

  return (
    <div className='p-7 mt-16 lg:mt-32 max-w-[1536px] mx-auto'>
        <div className='border-[1.6px] border-gray-300 overflow-hidden rounded-lg flex justify-center'>
         <div ref={line4Ref}  className='p-6 flex gap-8 font-display'>
               <h3 className='mx-2 whitespace-nowrap text-2xl font-semibold leading-7'>Download Analytics</h3>
               <span>•</span>
               <h3 className='mx-2 whitespace-nowrap text-2xl font-semibold leading-7'>Custom Menus</h3>
               <span>•</span>
               <h3 className='mx-2 whitespace-nowrap text-2xl font-semibold leading-7'>Multi-window support</h3>
               <span>•</span>
               <h3 className='mx-2 whitespace-nowrap text-2xl font-semibold leading-7'>Trays</h3>
               <span>•</span>
               <h3 className='mx-2 whitespace-nowrap text-2xl font-semibold leading-7'>Deep Linking</h3>
               <span>•</span>
               <h3 className='mx-2 whitespace-nowrap text-2xl font-semibold leading-7'>Download Analytics</h3>
               <span>•</span>
               <h3 className='mx-2 whitespace-nowrap text-2xl font-semibold leading-7'>Launch at startup</h3>
               <span>•</span>
               <h3 className='mx-2 whitespace-nowrap text-2xl font-semibold leading-7'>Offline Support</h3>
               <span>•</span>
               <h3 className='mx-2 whitespace-nowrap text-2xl font-semibold leading-7'>Good Signing</h3>
               <span>•</span>

         </div>



    </div>

    </div>
  )
}

export default CompanyFeatureLine
