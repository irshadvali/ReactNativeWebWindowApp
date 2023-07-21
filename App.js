import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        React Native App- Android, Ios, Windos, Macos and Web App
      </Text>
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.button}>
        <Text style={styles.textColor}>Click me!</Text>
      </TouchableOpacity>

      <Text>You clicked {count} times!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#018786',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3700B3',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignSelf: 'flex-start',
    borderRadius: 5,
  },
  title: {
    fontSize: 40,
  },
  textColor: {
    color: '#ffffff',
  },
});

export default App;
