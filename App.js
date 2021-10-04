import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,

} from 'react-native';


const App = () => {

  useEffect(() => {
    StatusBar.setBackgroundColor('red', true); //primerio parâmetro cor e segundo se é ou não animado
    StatusBar.setBarStyle('light-content', true); //primerio parâmetro cor e segundo se é ou não animado
    StatusBar.setHidden(false, true) //primerio parâmetro se é esconde ou nao e segundo se é ou não animado
  }, [])

  return (
    <SafeAreaView>
      <View>
        <StatusBar
          backgroundColor='lightblue'
          barStyle='dark-content'
          hidden={true}
        />
        <Text>Teste</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
