import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SportsLogicAI</Text>
      <Text style={styles.subtitle}>
        AI-powered NFL + NBA analysis, predictions, and data.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, fontWeight: 'bold' },
  subtitle: { marginTop: 10, fontSize: 16, color: '#555' }
});