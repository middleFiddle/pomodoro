import { MantineProvider, Group } from '@mantine/core';
import Counter from "./Counter.tsx"

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>


      <Group className="group">

        <Counter duration={5} id={'break'} className="group" />
        <Counter duration={25} id={'session'} className="group" />



      </Group>

    </MantineProvider>
  );
}