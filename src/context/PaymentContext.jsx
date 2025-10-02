import React, { createContext, useContext } from 'react';
import { usePaymentHook } from '../hooks/usePayment';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const paymentMethods = usePaymentHook();

  return (
    <PaymentContext.Provider value={paymentMethods}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};