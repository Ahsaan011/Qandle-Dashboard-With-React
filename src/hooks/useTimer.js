import {useState,useEffect} from 'react';

const useTimer = (isWorking) => {
    const [clocktime,setClocktime] = useState(0)


      useEffect(()=>{
        let mytimer 
        if (isWorking){
          mytimer = setInterval(() => {
            setClocktime((prev)=>prev+=1)
          }, 1000);
        }
    
        return ()=>{
          clearInterval(mytimer)
        }
    
      },[isWorking])

      return clocktime
}

export default useTimer