import React, { useEffect, useState } from 'react';
import { Stack, Title, Group, Button, Container, Center} from "@mantine/core"
import { MenuTarget } from '@mantine/core/lib/Menu/MenuTarget/MenuTarget';



// EVERYTHING WOULD BE SIMPLER IF WE DEAL ONLY WITH MILLISECONDS, EXCEPT FOR THE VIEW

//  INIITAL_MILLIS: NUMBER
//  ON START: DECREMENT THE NUMBER
//  WRITE A CONVERSION FROM MILLIS TO `MM:SS`
//  THAT'S IT REALLY



export default function Timer({id, className}) {
    const [future, setFuture] = useState(1500000)  // setFuture will handle resets and initializing "break" and "session" states
    const [paused, setPaused] = useState(true)
    const [reset, setReset] = useState(true)
    const [intId, setIntId] = useState(undefined)


const onStart = () => {
    if (intId) {
        clearInterval(intId)
    }
    
    setReset(false)
    
    if (paused) {
        const id= setInterval(() => setFuture(prev => prev -1), 1000)
        setIntId(id)
    }

    setPaused(prev => !prev)       
    
}



return (
    <Stack>
    <Title id={`${id}-label`} order={1}>{`${id[0].toUpperCase()}${id.slice(1)} Length`}</Title>
    <Group>
        <Button id={`start_stop`} onClick={onStart} className={className}>
            {paused ? 'Start' : 'Stop'}
        </Button>

        <Container id="time-left">
            {future}
        </Container>
        <Button id={`reset`} className={className}>Reset</Button>
    </Group>
    <Center>
        <Button className={className}></Button>
    </Center>

</Stack>
)
}