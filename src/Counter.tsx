import { Button, Container, Group, Title, Stack } from "@mantine/core"
import { useState, useEffect } from "react"

const Counter = ({ duration, id, className, setDuration }) => {
    const [display, setDisplay] = useState(duration)

    useEffect(() => {
      setDisplay(duration)
    
      return () => {
        
      }
    }, [duration])
    


    const increment = () => {
        setDuration(p => p + 1)
      
    }

    const decrement = () => {
        if (display > 0) {
            setDuration(p => p - 1)
            
        }
    }

    return (
        <>
            <h1 id={`${id}-label`}>{`${id[0].toUpperCase()}${id.slice(1)} Length`}</h1>
            <>
                
            <button id={`${id}-decrement`} onClick={decrement} className={className}>-</button>
                <div id={`${id}-length`}>
                    {display}
                </div>
                <button id={`${id}-increment`} onClick={increment} className={className}>+</button>
            </>


        </>
    )
}



export default Counter