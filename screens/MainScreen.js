import { StyleSheet, Text, View } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text>Main</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1abc9c',
  },
});
