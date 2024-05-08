import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Colors } from '../theme/color';

const ProgressBar = ({ progress }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress * 100);
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={[styles.progressBar, { width: `${width}%` }]}>
        {/* <Text style={styles.progressText}>{`${Math.round(width)}%`}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 12,
    width: '100%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  progressText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProgressBar;