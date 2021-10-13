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
        <Button title='Abrir' onPress={() => setIsModalOpen(true)} />

        <Modal
          visible={isModalOpen}// controla se a modal está aberta ou fechada
          animationType='fade' // animação, tem fade, slide, none e etc
          transparent={false}
          onRequestClose={() => { }} //Quando a modal fecha executa essa função
          onShow={() => { }} //Quando a modal aparece executa essa função
        >
          <View>
            <Button title='Fechar' onPress={() => setIsModalOpen(false)} />
          </View>
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
