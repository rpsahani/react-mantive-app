import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';

import { theme } from './theme';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-app-color-scheme',
});

function App() {
  return (
    <>
      <MantineProvider theme={theme} colorSchemeManager={colorSchemeManager}>
        App
      </MantineProvider>
    </>
  );
}

export default App;
