import React from 'react'

const ShowCase = () => {
  return (
    <div id="work" className='app-showcase'>
        <div className='w-full'>
          <div className='showcaselayout'>
             {/*Left*/}
              <div className='first-project-wrapper'>
                <div className='img'>
                      <img src='/images/profile.jpg' alt='Potrait'/>
                </div>
                <div className='text-content'>
                  <h2>I know I look good,</h2>
                  <p className='text-white-50 md:text-xl'>BUT still am capabale of doing something better than just looking good...</p>
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
  )
}

export default ShowCase