import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';

const CustomModal = ({ visible, children }) => (
  <Modal visible={visible} transparent animationType="slide">
    <View style={styles.modalBackground}>
      <View style={styles.modalContainer}>{children}</View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContainer: { width: '80%', padding: 20, backgroundColor: 'white', borderRadius: 10 },
});

export default CustomModal;
