import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './app';
import { theme } from './core/theme';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);

reportWebVitals();
