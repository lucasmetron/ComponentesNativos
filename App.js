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

  const [lists, setLists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedList, setSelectedList] = useState({});

  async function getLists() {
    setIsLoading(true);
    const listsFromBD = await ListsService.list();
    setIsLoading(false);
    setLists(listsFromBD);
  }

  async function createList() {
    const newList = await ListsService.create({ title: 'Nova Lista', description: '', picture: '', items: [] })
    let newLists = [...lists, newList]
    await setLists(newLists)
    selectList(newList)
  }

  function selectList(list) {
    setSelectedList(list)
    setModalVisible(true)
  }

  function updateList(newList) {
    const upLists = [...lists]
    const listIndex = upLists.findIndex(list => list.id === newList.id);
    upLists[listIndex] = newList;
    setLists(upLists)
    setSelectedList({})
    setModalVisible(false)

    ListsService.update(upLists[listIndex]);
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

  return (
    <SafeAreaView>
      <View>
        <Button title='Add Nova Lista' onPress={createList} style={{ flex: 1 }} color={'green'} />
        <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getLists} />}>
          <ListsView lists={lists} onRemove={removeList} onSelect={selectList} />
        </ScrollView>


        <Modal
          animationType='slide'
          transparent={false}
          visible={modalVisible}
        >
          <List list={selectedList} onActionDone={updateList} />
        </Modal>

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
