import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Progress

} from 'react-native';

import { ProgressBar } from '@react-native-community/progress-bar-android';


const App = () => {

  useEffect(() => {

  }, [])

  return (
    <SafeAreaView>
      <View>
        <View style={styles.example}>
          <Text>Circle Progress Indicator</Text>
          <ProgressBar />
        </View>
        <View style={styles.example}>
          <Text>Horizontal Progress Indicator</Text>
          <ProgressBar styleAttr="Horizontal" />
        </View>
        <View style={styles.example}>
          <Text>Colored Progress Indicator</Text>
          <ProgressBar styleAttr="Horizontal" color="#2196F3" />
        </View>
        <View style={styles.example}>
          <Text>Fixed Progress Value</Text>
          <ProgressBar
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
          />
        </View>
        <Text>Teste</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  example: {
    marginVertical: 24,
  },
});

export default App;
