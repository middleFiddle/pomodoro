import React, { useEffect, useState } from 'react';
import { Stack, Title, Group, Button, Container, Center, getSortedBreakpoints} from "@mantine/core"
import { MenuTarget } from '@mantine/core/lib/Menu/MenuTarget/MenuTarget';




type Format = (i: number) => string

const format: Format = (i) => {
    return i < 10 ? `0${i}` : `${i}`
}

type Converter = (millis: number) => string 

const converter: Converter = (millis) => {
    const minutes = Math.floor(millis/60000)
    const seconds = millis%60000/1000
    const [_minutes, _seconds] = [format(minutes), format(seconds)]
    return `${_minutes}:${_seconds}`
}


export default function Timer({id, className, breakDur, sessionDur, setSessionDur, setBreakDur}) {
    const [future, setFuture] = useState(sessionDur*60000) 
    const [paused, setPaused] = useState(true)
    const [intId, setIntId] = useState(undefined)
    const [brake, setBrake] = useState(false)

    useEffect(() => {
      if (brake) {
        setFuture(breakDur*60000)
      }

      if(!brake) {
        setFuture(sessionDur*60000)
      }
    
      return () => {
        
      }
    }, [breakDur, sessionDur, brake])
    


    const onStart = () => {
        if (intId) {
            clearInterval(intId)
        }
   
        if (paused) {
            const id= setInterval(() => setFuture(prev => prev -1000), 1)
            setIntId(id)
        }
        setPaused(prev => !prev)       
    }

    const onReset = () => {
        if(!paused){
            onStart()
        }
        setBreakDur(5)
        setSessionDur(25)
        brake ? setFuture(breakDur*60000) : setFuture(sessionDur*60000)
    }

    const boundary = (left:number): number => {
        if (left <= 0) {
            if (brake) {
                setBrake(prev => !prev)
                setFuture(sessionDur*60000)
                return 
            }
            setBrake(prev => !prev)
            setFuture(breakDur*60000)

        }
        return future
    } 


return (
    
    <>
        <button id={`start_stop`} onClick={onStart} className={className}>
            {paused ? 'Start' : 'Stop'}
        </button>
        <div className="display">
        <h3 id="timer-label">{brake ? "Take a Break" : "Keep Up!"}</h3>
        <div id="time-left">
            {converter(boundary(future))}
        </div>

        </div>
        <button id={`reset`} onClick={onReset} className={className}>Reset</button>
    </>



)
}