import React from 'react'
import { counterItems } from '../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Image } from '@react-three/drei'
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
    
    </div>
  )
}

export default AnimatedCounter