import React, {useRef, useState, useEffect} from "react"

const TimerCountDown = () => {
  const ref = useRef(null);

  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    return(
      total, seconds, minutes, hours
      )
    }
    
    const startTimer = () => {
      let { total, seconds, minutes, hours } = getTimeRemaining(e);
      
  }
  
}
