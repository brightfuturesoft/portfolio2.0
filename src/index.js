import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseContext from './context/UseContext/UseContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UseContext>
        <App />
      </UseContext>
    </QueryClientProvider>
  </React.StrictMode>
)
reportWebVitals();
