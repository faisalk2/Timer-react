import React, { useEffect } from 'react'
import style from "./timer.module.css"
let start=0;
let end=100;
const Timer1 = () => {
const [timer,setTimer]=React.useState(start);
useEffect(()=>{
  let id=setInterval(()=>{
    if(timer==end)
    {
      clearInterval(id)
    }else{
      setTimer((time)=>time+1)
      
    }
  },1000);
  return()=> clearInterval(id)
},[timer])

  return (
    <div>
        <h1 className={style.timer}>Count:- {timer}</h1>

    </div>
  )
}

export default Timer1