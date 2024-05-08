import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const CustomDropdown = ({ options, onSelect }) => {
  const [visible, setVisible] = useState(false);

  const handleSelect = (item) => {
    onSelect(item);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.dropdownButton}>
        <Text>Select an Option</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelect(item)} style={styles.optionItem}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={() => setVisible(false)} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dropdownButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default CustomDropdown;