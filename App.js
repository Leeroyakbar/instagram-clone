import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from "./app/Shared/Header/Header";
import { SafeAreaView } from 'react-native-safe-area-context';
import Story from './app/Screen/Story/Story.js';
import Feeds from './app/Screen/Feeds/Feeds.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <View style={{height: 120}}>
          <Story />
        </View>
        <Feeds />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: "column",
    justifyContent: 'center',
  },
});
