import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { ListsService } from './app/services/ListsService';
import ListsView from './app/views/ListsView';
import List from './app/Components/List';

const App = () => {

  const [lists, setLists] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getLists() {
    setIsLoading(true)
    const listsFromBD = await ListsService.list()
    setIsLoading(false)
    setLists(listsFromBD)
  }

  function removeList(listToRemove) {
    const newList = lists.filter(list => list.id !== listToRemove.id)
    setLists(newList)
    ListsService.remove(listToRemove.id)
  }

  useEffect(() => {
    // console.log('lista from app', lists)
  }, [lists])

  useEffect(() => {
    getLists()
  }, [])


  const [counter, setCounter] = useState(0)

  function handleCounter() {
    setCounter(counter + 1)
  }

  return (
    <SafeAreaView>
      <View
        onStartShouldSetResponder={() => true} // se tiver como true responde quando o usuário tocar na superficie.
        onMoveShouldSetResponder={() => false} // se tiver como true responde quando o usuário desliza o dedo sobre a view.
        onResponderGrant={() => handleCounter()} //executa função quando toca na view. Para funcionar os métodos acima precisam estar true.
        onResponderRelease={() => handleCounter()} //executa função quando ao tirar o dedo da view. Para funcionar os métodos acima precisam estar true.
        onResponderMove={() => handleCounter()} //executa função quando pressiono o dedo na tela e vou mexendo o dedo com o dedo pressionado.
      >
        {/* <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getLists} />}>
        <ListsView lists={lists} onRemove={removeList} />
      </ScrollView> */}
        {/* <List /> */}

        <Text >Lucas Rosa</Text>
        <Text>Counter: {counter}</Text>

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
