import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const SavingItem = ({ amount, onEdit, onDelete }) => (
  <View style={styles.card}>
    <Text style={styles.amount}>₱ {amount}</Text>
    <View style={styles.actions}>
      <CustomButton title="Edit" onPress={onEdit} color="orange" />
      <CustomButton title="Delete" onPress={onDelete} color="red" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8, marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  amount: { fontSize: 18, fontWeight: 'bold' },
  actions: { flexDirection: 'row' },
});

export default SavingItem;
