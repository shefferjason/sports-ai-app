import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import GameCard from '../components/GameCard';

const fakeNBA = [
  { home: "Lakers", away: "Celtics", spread: -2, predicted: "Celtics by 5" },
  { home: "Warriors", away: "Suns", spread: -1, predicted: "Warriors by 3" }
];

export default function NBAScreen() {
  return (
    <ScrollView>
      <Text style={{ fontSize: 26, margin: 20 }}>NBA Predictions</Text>
      {fakeNBA.map((g, i) => <GameCard key={i} game={g} />)}
    </ScrollView>
  );
}