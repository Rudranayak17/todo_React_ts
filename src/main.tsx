import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { ThemeProvider } from '@emotion/react';
import { theme } from './theme.ts';
import { CssBaseline } from "@mui/material";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
