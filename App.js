import React from 'react';
import { SavingProvider } from './context/SavingContext';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SavingProvider>
      <HomeScreen />
    </SavingProvider>
  );
}
