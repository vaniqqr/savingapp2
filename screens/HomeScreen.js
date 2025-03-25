import React, { useState, useContext } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { SavingContext } from '../context/SavingContext';
import CustomButton from '../components/CustomButton';
import CustomModal from '../components/CustomModal';
import SavingList from '../components/SavingList';

const HomeScreen = () => {
  const { addSaving, updateSaving } = useContext(SavingContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const openModal = (index = null, currentAmount = '') => {
    setEditIndex(index);
    setAmount(currentAmount);
    setModalVisible(true);
  };

  const handleSave = () => {
    if (editIndex !== null) updateSaving(editIndex, amount);
    else addSaving(amount);
    setModalVisible(false);
    setAmount('');
    setEditIndex(null);
  };

  return (
    <View style={styles.container}>
      <CustomButton title="Add Saving" onPress={() => openModal()} />
      <SavingList onEdit={(index) => openModal(index)} />

      <CustomModal visible={modalVisible}>
        <TextInput placeholder="Enter Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" style={styles.input} />
        <CustomButton title={editIndex !== null ? "Update" : "Add"} onPress={handleSave} />
        <CustomButton title="Cancel" onPress={() => setModalVisible(false)} color="gray" />
      </CustomModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, marginTop: 40 },
  input: { borderBottomWidth: 1, padding: 10, marginBottom: 10 },
});

export default HomeScreen;
