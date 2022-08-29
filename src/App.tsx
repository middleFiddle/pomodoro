import { MantineProvider, Group, Container, Center } from '@mantine/core';
import { useState } from 'react';
import Counter from "./Counter"
import Timer from "./Timer"

export default function App() {
    const [brake, setBrake] = useState(false)

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>


      <Group className="group">

        <Counter duration={5} id={'break'} className="group" />
        <Counter duration={25} id={'session'} className="group" />



      </Group>

      <Center>
        <Group className='group'>
        <Timer 
          brake={brake}
          setBrake={setBrake}
          id={'timer'} 
          className="group" />  
      

        </Group>
      </Center>

    </MantineProvider>
  );
}