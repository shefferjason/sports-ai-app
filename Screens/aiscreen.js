import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

export default function AIScreen() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const askAI = () => {
    setOutput(`AI Guess: Based on trends, I'd say — ${input}? Probably 60% confidence.`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Ask SportsLogic AI</Text>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Example: Who wins Lakers vs Heat?"
        style={{
          marginTop: 20,
          padding: 10,
          borderWidth: 1,
          borderRadius: 8
        }}
      />

      <Button title="Ask AI" onPress={askAI} />

      <ScrollView style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18 }}>{output}</Text>
      </ScrollView>
    </View>
  );
}