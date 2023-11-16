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
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { AuthProvider } from './context/AuthContext';
// import AuthProvider from './context/AuthContext';
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));

const stripePromise = loadStripe('pk_test_51L17CjFVPM1NcC4wk5HSCO097ADOKg2eQAOM7vvJiloMXfu1ghTtdemx4zqJIsaokSLRN1ymzqin5gtKFyMn0e6z00PtAPsGer');

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <React.Fragment>
        <AuthProvider>
          <AppProvider>
            <FilterContextProvider>
              <CartProvider>
                <Elements stripe={stripePromise}>
                  <App />
                </Elements>
              </CartProvider>
            </FilterContextProvider>
          </AppProvider>
        </AuthProvider>
      </React.Fragment>
    </QueryClientProvider>
  </BrowserRouter>
);

reportWebVitals();
