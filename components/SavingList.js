import React, { useContext } from 'react';
import { FlatList } from 'react-native';
import SavingItem from './SavingItem';
import { SavingContext } from '../context/SavingContext';

const SavingList = ({ onEdit }) => {
  const { savings, deleteSaving } = useContext(SavingContext);

  return (
    <FlatList
      data={savings}
      renderItem={({ item, index }) => (
        <SavingItem 
          amount={item} 
          onEdit={() => onEdit(index)} 
          onDelete={() => deleteSaving(index)} 
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default SavingList;
