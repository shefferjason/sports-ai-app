import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import GameCard from '../components/GameCard';

const fakeNFL = [
  { home: "Dolphins", away: "Jets", spread: -6, predicted: "Dolphins by 10" },
  { home: "Cowboys", away: "Eagles", spread: -3, predicted: "Cowboys by 4" }
];

export default function NFLScreen() {
  return (
    <ScrollView>
      <Text style={{ fontSize: 26, margin: 20 }}>NFL Predictions</Text>
      {fakeNFL.map((g, i) => <GameCard key={i} game={g} />)}
    </ScrollView>
  );
}