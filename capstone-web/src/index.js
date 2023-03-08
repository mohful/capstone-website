import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CssBaseline, ThemeProvider} from '@mui/material'
import { mainLightTheme } from './Themes/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={mainLightTheme}>
      <CssBaseline>
        <App />
        </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
