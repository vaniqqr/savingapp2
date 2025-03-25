import React, { createContext, useState } from 'react';

export const SavingContext = createContext();

export const SavingProvider = ({ children }) => {
  const [savings, setSavings] = useState([]);

  const addSaving = (amount) => setSavings([...savings, amount]);
  const deleteSaving = (index) => setSavings(savings.filter((_, i) => i !== index));
  const updateSaving = (index, newAmount) => {
    const updated = [...savings];
    updated[index] = newAmount;
    setSavings(updated);
  };

  return (
    <SavingContext.Provider value={{ savings, addSaving, deleteSaving, updateSaving }}>
      {children}
    </SavingContext.Provider>
  );
};
