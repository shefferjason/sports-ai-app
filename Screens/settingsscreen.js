import React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Settings</Text>
      <Text style={{ marginTop: 20 }}>• Version 1.0</Text>
      <Text>• API ready</Text>
      <Text>• Offline mode enabled</Text>
    </View>
  );
}