import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook';
import Lottie from 'lottie-react';
import sandTimer from '../../../assets/lottie-files/sandTimer.json'
import Typography from '@mui/material/Typography'
function Counter() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 10); 
    const {
        seconds,
        minutes,
        isRunning,
        start,
        restart,
      } = useTimer({ expiryTimestamp:time, onExpire: () => console.log('onExpire called') });
    
  
    useEffect(()=>{
        start()
        return ()=>{
            restart(time) 
        }
    },[])
  return (
    <div>
    <div className='h-20 w-20 flex flex-row gap-2 items-center'>
    <Lottie animationData={sandTimer} loop={true}/> <Typography variant="h6" color="initial">{seconds}</Typography>
    </div> 
    </div>
  )
}

export default Counter
