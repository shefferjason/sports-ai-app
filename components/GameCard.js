import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameCard({ game }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{game.away} @ {game.home}</Text>
      <Text>Spread: {game.spread}</Text>
      <Text style={{ marginTop: 5 }}>AI Prediction: {game.predicted}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10
  },
  title: { fontSize: 18, fontWeight: 'bold' }
});