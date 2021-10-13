import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  TextInput,
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
      <View>
        {/* <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getLists} />}>
        <ListsView lists={lists} onRemove={removeList} />
      </ScrollView> */}
        {/* <List /> */}
        <ScrollView>

          <TextInput placeholder='A' style={styles.input} />
          <TextInput placeholder='B' style={styles.input} />
          <TextInput placeholder='C' style={styles.input} />
          <TextInput placeholder='D' style={styles.input} />
          <TextInput placeholder='E' style={styles.input} />
          <TextInput placeholder='F' style={styles.input} />
          <TextInput placeholder='G' style={styles.input} />
          <TextInput placeholder='H' style={styles.input} />
          <TextInput placeholder='I' style={styles.input} />
          <TextInput placeholder='J' style={styles.input} />
          <TextInput placeholder='K' style={styles.input} />
          <TextInput placeholder='L' style={styles.input} />
          <TextInput placeholder='M' style={styles.input} />
          <TextInput placeholder='N' style={styles.input} />
          <TextInput placeholder='O' style={styles.input} />
        </ScrollView>

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

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 200,
    height: 60,
  }
});

export default App;
