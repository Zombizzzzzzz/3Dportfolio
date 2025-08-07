import React from 'react'
import TitleHeader from '../components/TitleHeader'

const ShowCase = () => {
  return (
   <div className='py-10'>
     <TitleHeader 
         title="Its me!"
         sub = "Hiiiiiiiiiiii 👋"
         />
    <div id="work" className='app-showcase'>
        
        <div className='w-full'>
          <div className='showcaselayout'>
             {/*Left*/}
              <div className='first-project-wrapper'>
                <div className='image-wrapper '>
                      <img src='/images/profile.jpg' alt='Potrait' height={60} width={60}/>
                </div>
                <div className='text-content'>
                  <h2>😏 I know I look good,</h2>
                  <p className='text-white-50 md:text-xl'>But still am capabale of doing better than just "looking good"...
                    Anything I do seriously, if its done without a touch of my wicked sense of humor then I am not serious on that thing at all
                  </p>
                </div>
              </div>
             {/*Right*/}
           <div className='project-list-wrapper overflow-hidden'>
             <div className='project'>
                 
             </div>
           </div>
         
          </div>
        </div>
   </div>
    </div>
  )
}

export default ShowCase