import React, {useState, useEffect, useRef} from 'react'

function Home() {
  return (
    <div className='h-screen w-screen px-12 py-8 space-y-4'>

      {/* row 1 */}
      <div className='w-full flex flex-row h-[50%] justify-evenly'>
        <div className='h-full flex items-center'>
          <img src={require("../assets/2/layout/1.png")} alt="" className='max-h-full' />
        </div>
        <div className='h-full flex items-center'>
          <img src={require("../assets/2/layout/2.png")} alt="" className='max-h-full' />
        </div>
        <div className='h-full hidden lg:flex'>
          <img src={require("../assets/2/chat.png")} alt="" className='max-h-full object-contain' />
        </div>
      </div>

      {/* row 2 */}
      <div className='w-full flex flex-row h-[50%] justify-evenly'>
        <div className='h-full'>
          <div className='h-full'>
            <img src={require("../assets/2/bg.png")} alt="" className='max-h-full' />
          </div>
        </div>

        <div className='h-full'>
          <div className='h-full'>
            <img src={require("../assets/2/bg.png")} alt="" className='max-h-full' />
          </div>
        </div>

        <div className='w-full flex flex-row-reverse h-full justify-evenly'>
          <div className='flex flex-col '>

            <div className='h-[45%]'>
              <div className='h-full'>
                <img src={require("../assets/2/bg.png")} alt="" className='max-h-full' />
              </div>
            </div>

            

            <div className='h-[45%]'>
              <div className='h-full'>
                <img src={require("../assets/2/bg.png")} alt="" className='max-h-full' />
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home