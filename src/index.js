import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { AppProvider } from './context/ProductContext';
import { FilterContextProvider } from './context/FilterContext';
import { CartProvider } from './context/CartContext';
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <AppProvider>
          <FilterContextProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterContextProvider>
        </AppProvider>
      </React.Fragment>
    </QueryClientProvider>
  </BrowserRouter>
);

reportWebVitals();
