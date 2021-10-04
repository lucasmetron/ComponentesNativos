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
          titleColor='white'
          subtitle="Desc. App"
          subtitleColor='red'
          // navIcon={icon} icone lado esquerdo
          actions={[ //ações que seram feitas ao clicar nelas
            {
              title: 'Configurações',
              icon: icon,
            },
            {
              title: 'Opções',
              show: 'always', //mostra botão na tela, se não tiver o always todas actions ficam em um menu modal
              icon: icon, //icone da action
            },
          ]}
          style={{
            backgroundColor: '#8196F3',
            height: 56
          }}
          onActionSelected={handleAction} //função disparada ao selecionar action
          onIConClicked={handleAction} //funcção disparada ao sleecionar menu principal 
        />
        <Text>teste</Text>
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
