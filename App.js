import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  TextInput
} from 'react-native';
import { ListsService } from './app/services/ListsService'
import ListsView from './app/views/ListsView';

const App = () => {

  const [lists, setLists] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getLists() {
    setIsLoading(true)
    const listsFromBD = await ListsService.list()
    setIsLoading(false)
    setLists(listsFromBD)
  }

  useEffect(() => {
    console.log('lista from app', lists)
  }, [lists])

  // useEffect(() => {
  //   getLists()
  // }, [])

  const [nome, setNome] = useState('');

  return (
    <SafeAreaView>
      <View>
        <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getLists} />}>
          <ListsView lists={lists} />
        </ScrollView>
        <TextInput
          keyboardType='phone-pad' //tipo do teclado
          maxLength={20} //maximo de caracteres
          editable={true} //se o input esta ou nao habilitado
          multiline={true} // permite o input aumentar de tamanho
          numberOfLines={4} //numero de linhas
          style={{ height: 40, margin: 10, borderColor: 'gray', borderWidth: 1 }}
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <Text>{nome} - {nome.length}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

export default App;
