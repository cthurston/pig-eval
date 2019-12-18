import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import DarkTheme from './DarkTheme';
import Scaffold from './Scaffold';

function App () {
  return (
    <MuiThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Scaffold />
    </MuiThemeProvider>
  );
}

export default App;
