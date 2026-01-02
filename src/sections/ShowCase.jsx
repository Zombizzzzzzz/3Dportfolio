import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import GlowingButton from '../components/Showcase'
import ProjectShowcase from '../components/Showcase'

const ShowCase = () => {





  return (
   <div className=''>
     <TitleHeader 
         title="Its me!"
         sub = "Hiiiiiiiiiiii 👋"
         />
    <div id="work" className='app-showcase'>
        
        <div className='w-full'>
          <div className='showcaselayout'>
             {/*Left*/}
              <div className='first-project-wrapper x'>
                <div className='pfp'>
                      <img src='/images/profile.jpg' 
                      alt='Potrait' 
                      height={120} 
                      width={350} 
                      className='rounded-full'/>
                </div>
                <div className='text-content'>
                  <h2>😏 I know I look good,</h2>
                  <p className='text-white-50 md:text-xl'>But still am capabale of doing better than just "looking good"...
                    Anything I do seriously, if its done without a touch of my wicked sense of humor then I am not serious on that thing at all
                  </p>
                
                </div>
              </div>
         
          </div>
          
        </div>
  
   </div>
    <TitleHeader 
         title="My Projects 💻"
        sub="..."
         />
            <div className='app-showcase'>
          <div className='projects-grid grid grid-cols-1 md:grid-cols-2 gap-8'>
            <ProjectShowcase
           title="Kera"
    description="A social media platform I built during the Social Media ban in Nepal"
    image="/images/kera.png"
    link="https://kera-tau.vercel.app"
         />
            <ProjectShowcase
           title="Mithila Bazar"
    description="A full-stack e-commerce website I built, featuring modern design and complete shopping functionality"
    image="/mithilabazar.png"
    link="https://www.mithilabazar.shop"
    theme="blue"
         />
          </div>
    </div>
    </div>
  )
}

export default ShowCase