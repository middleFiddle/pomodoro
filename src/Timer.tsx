import React, { useEffect, useState } from 'react';
import { Stack, Title, Group, Button, Container, Center, getSortedBreakpoints} from "@mantine/core"
import { MenuTarget } from '@mantine/core/lib/Menu/MenuTarget/MenuTarget';



// EVERYTHING WOULD BE SIMPLER IF WE DEAL ONLY WITH MILLISECONDS, EXCEPT FOR THE VIEW

//  INIITAL_MILLIS: NUMBER
//  ON START: DECREMENT THE NUMBER
//  WRITE A CONVERSION FROM MILLIS TO `MM:SS`
//  THAT'S IT REALLY

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


export default function Timer({id, className, brake, setBrake}) {
    const [future, setFuture] = useState(1500000) 
    const [paused, setPaused] = useState(true)
    const [intId, setIntId] = useState(undefined)
    


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

    const boundary = (left:number): number => {
        if (left === 0) {
            if (brake) {
                setBrake(prev => !prev)
                setFuture(1500000)
                return
            }
            setBrake(prev => !prev)
            setFuture(300000)
        }
        return future 
    } 


return (
    <Stack>
    <Title id={`${id}-label`} order={1}>{`${id[0].toUpperCase()}${id.slice(1)} Length`}</Title>
    <Group>
        <Button id={`start_stop`} onClick={onStart} className={className}>
            {paused ? 'Start' : 'Stop'}
        </Button>

        <Container id="time-left">
            {converter(boundary(future))}
        </Container>
        <Button id={`reset`} className={className}>Reset</Button>
    </Group>
    <Center>
        <Button className={className}></Button>
    </Center>

</Stack>
)
}