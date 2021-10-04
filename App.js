import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Progress,
  Button,
} from 'react-native';
import ToolbarAndroid from '@react-native-community/toolbar-android';



const App = () => {

  const icon = { uri: 'https://toppng.com/uploads/preview/menu-icon-png-3-lines-11552739310fjzs2n2wxt.png' }

  function handleAction(position) {
    console.log(position)
    console.log('teste')
  }

  return (
    <SafeAreaView>
      <View>
        <ToolbarAndroid
          title="Meu App"
          subtitle="Desc. App"
          actions={[
            {
              title: 'Configurações',
            },
            {
              title: 'Opções',
            },
          ]}
          style={{
            backgroundColor: '#8196F3',
            height: 56
          }}
          onActionSelected={handleAction}
          onIConClicked={handleAction}
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
