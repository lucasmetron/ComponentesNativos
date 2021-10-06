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


import { Picker } from '@react-native-picker/picker';


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

  const [item, setItem] = useState('')

  return (
    <SafeAreaView>
      <View>
        <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getLists} />}>
          <ListsView lists={lists} />
        </ScrollView>

        <Picker
          style={{ height: 50, width: 150 }}
          selectedValue={item}
          onValueChange={(item, index) => setItem(item)}
        >
          <Picker.Item label='JavaScrip' value='JS' />
          <Picker.Item label='Python' value='PY' />
          <Picker.Item label='Ruby' value='RB' />
        </Picker>

        <Text>{item}</Text>
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
