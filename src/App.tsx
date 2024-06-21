import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import moment from 'moment'
import './App.css'
import Clock from './components/Clock'

function App() {
  const [time, setTime] = useState(moment())


  useEffect(()=>{
    const myInterval = setInterval(()=> setTime(moment()), 1000)
    return () => clearInterval(myInterval)
  })

  return (
    <>
      <Clock time={time}/>
     </>
  )
}

export default App
