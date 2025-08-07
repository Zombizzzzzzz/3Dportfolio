import React from 'react'
import { counterItems } from '../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const AnimatedCounter = () => {
  useGSAP(() => {
   
    gsap.registerPlugin(ScrollTrigger)
   
    gsap.from(
      ".a",
      {
        scrollTrigger :{
          trigger: ".a",
          start: "top bottom",
          end: "top 50%",
          scrub:3,
        
          

        },
       
       x : 1500,
       rotation:360,
       duration:3      
      },
      
    );
  });

  
  return (

    <div id="counter" className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-4-cols'>
            {counterItems.map((item) => (
               <div className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center a'>
               <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-2'>
                     {item.suffix}
                    </div>
                    <div className='text-white-50 text-lg'> {item.label} </div>
                </div>
            ))}
            

        </div>

    </div>
  )
}

export default AnimatedCounter