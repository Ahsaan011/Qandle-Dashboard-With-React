import {useState} from 'react';

const useIsWorking = (initialState) => {
    const [isWorking,setIsWorking] = useState(initialState);

    const startWorking = () => {
        console.log("start working");
        setIsWorking(true);
      };
      const stopWorking = () => {
        console.log("stop working");
        setIsWorking(false);
      };

    return {isWorking,startWorking,stopWorking}
}
export default useIsWorking