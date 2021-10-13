import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  TextInput,
  Modal,
  Button,
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


  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <SafeAreaView>
      <View>
        <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getLists} />}>
          <ListsView lists={lists} onRemove={removeList} />
        </ScrollView>
        <ScrollView>
          <List />
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
