import { View, Text, TouchableOpacity } from 'react-native';

export default function Dashboard({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Sports AI Dashboard</Text>

      <TouchableOpacity
        style={{ marginTop: 30, padding: 20, backgroundColor: '#eee', borderRadius: 12 }}
        onPress={() => navigation.navigate('Predictor')}
      >
        <Text>📊 Go to Predictor</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ marginTop: 15, padding: 20, backgroundColor: '#eee', borderRadius: 12 }}
        onPress={() => navigation.navigate('Player', { name: 'Sample Player' })}
      >
        <Text>🏀 Sample Player Page</Text>
      </TouchableOpacity>
    </View>
  );
}
