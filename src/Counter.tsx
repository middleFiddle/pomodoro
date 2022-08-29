import { Button, Container, Group, Title, Stack } from "@mantine/core"
import { useState } from "react"

const Counter = ({ duration, id, className }) => {
    const [display, setDisplay] = useState(duration)


    const increment = () => {
        setDisplay(p => p + 1)
    }

    const decrement = () => {
        if (display > 0) {
            setDisplay(p => p - 1)
        }
    }

    return (
        <Stack>
            <Title id={`${id}-label`} order={1}>{`${id[0].toUpperCase()}${id.slice(1)} Length`}</Title>
            <Group>
                <Button id={`${id}-increment`} onClick={increment} className={className}>+</Button>

                <Container id={`${id}-length`}>
                    {display}
                </Container>
                <Button id={`${id}-decrement`} onClick={decrement} className={className}>-</Button>
            </Group>


        </Stack>
    )
}



export default Counter