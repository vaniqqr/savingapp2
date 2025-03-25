import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, color = 'blue' }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { padding: 10, borderRadius: 8, margin: 5 },
  text: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});

export default CustomButton;
