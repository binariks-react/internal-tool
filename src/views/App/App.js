import React from 'react';
import { ThemeProvider } from 'styled-components';
import Routes from './Routes/Routes';
import theme from './theme';


const App = () => (
  <div className="App">
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </div>
);

export default App;
