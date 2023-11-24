import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';

import { theme } from './theme';
import { Routes } from './routes';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-app-color-scheme',
});

function App() {
  return (
    <>
      <MantineProvider theme={theme} colorSchemeManager={colorSchemeManager}>
        <Routes/>
      </MantineProvider>
    </>
  );
}

export default App;
