import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-loading-skeleton/dist/skeleton.css'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import LangContextProvider from './Context/LangContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(

  <QueryClientProvider client={queryClient}>

    <LangContextProvider>

      <App />

    </LangContextProvider>

  </QueryClientProvider>
  
);


