import { MantineProvider, Group, Container, Center } from '@mantine/core';
import Counter from "./Counter"
import Timer from "./Timer"

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>


      <Group className="group">

        <Counter duration={5} id={'break'} className="group" />
        <Counter duration={25} id={'session'} className="group" />



      </Group>

      <Center>
        <Group className='group'>
        <Timer id={'timer'} className="group"></Timer>

        </Group>
      </Center>

    </MantineProvider>
  );
}