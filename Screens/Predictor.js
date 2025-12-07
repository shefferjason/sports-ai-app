import { View, Text, TextInput, TouchableOpacity, useState } from 'react-native';

export default function Predictor() {
  const [player, setPlayer] = useState("");
  const [team, setTeam] = useState("");
  const [prediction, setPrediction] = useState(null);

  const makePrediction = () => {
    // Placeholder model logic (later replaced with real AI)
    const score = Math.floor(Math.random() * 30) + 5;
    setPrediction(`${player} is projected to score around ${score} points.`);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>AI Predictor</Text>

      <TextInput
        placeholder="Player Name"
        style={{ marginTop: 20, padding: 15, backgroundColor: '#eee', borderRadius: 8 }}
        onChangeText={text => setPlayer(text)}
      />

      <TextInput
        placeholder="Team"
        style={{ marginTop: 15, padding: 15, backgroundColor: '#eee', borderRadius: 8 }}
        onChangeText={text => setTeam(text)}
      />

      <TouchableOpacity
        style={{ marginTop: 20, padding: 20, backgroundColor: '#222', borderRadius: 12 }}
        onPress={makePrediction}
      >
        <Text style={{ color: '#fff' }}>Predict</Text>
      </TouchableOpacity>

      {prediction && (
        <Text style={{ marginTop: 30, fontSize: 18 }}>{prediction}</Text>
      )}
    </View>
  );
}
