import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Progress,
  Button

} from 'react-native';

import { ProgressView } from "@react-native-community/progress-view";


const App = () => {

  const [teste, setTeste] = useState(0.0)

  return (
    <SafeAreaView>
      <View>
        <ProgressView
          progressTintColor="orange"
          trackTintColor="blue"
          progress={teste}
        />
        <Button
          title='teste'
          onPress={() => {
            setTeste(teste + 0.1)
          }}
        />
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
