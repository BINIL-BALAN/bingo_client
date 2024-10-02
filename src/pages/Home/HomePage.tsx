import React from 'react'
import RoomComponent from './components/RoomComponent'
import Social from './components/Social'
function HomePage() {
  return (
    <div className='grid grid-cols-3 h-full'>
        <div className='col-span-2 h-full flex justify-center items-center'>
          <RoomComponent />
        </div>
        <div className=''>
          <Social />
        </div>
    </div>
  )
}

export default HomePage
