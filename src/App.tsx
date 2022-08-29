
import { useState } from 'react';
import Counter from "./Counter"
import Timer from "./Timer"

export default function App() {
  const [breakDur, setBreakDur] = useState(5)  
  const [sessionDur, setSessionDur] = useState(25)

  return (
    <>


      <div className="group">

        <Counter  duration={breakDur} setDuration={setBreakDur} id={'break'} className="group" />
        <Counter  duration={sessionDur} setDuration={setSessionDur} id={'session'} className="group" />



      </div>

      <div>
        <div className='group'>
        <Timer 
          id={'timer'} 
          className="timer" 
          breakDur={breakDur}
          sessionDur={sessionDur}
          setBreakDur={setBreakDur}
          setSessionDur={setSessionDur}
        />  
      

        </div>
      </div>

    </>
  );
}