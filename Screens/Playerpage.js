import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function PlayerPage({ route }) {
  const { name } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>{name}</Text>

      <Text style={{ marginTop: 20, fontSize: 16 }}>Performance Trend (example):</Text>

      <LineChart
        data={{
          labels: ["1", "2", "3", "4", "5"],
          datasets: [
            { data: [12, 22, 18, 30, 26] }
          ]
        }}
        width={Dimensions.get("window").width - 40}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimal: 0,
        }}
        style={{ marginTop: 20, borderRadius: 12 }}
      />
    </View>
  );
}
