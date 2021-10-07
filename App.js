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

import Slider from '@react-native-community/slider';




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

  const [value, setValue] = useState(10)

  return (
    <SafeAreaView>
      <View>
        <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getLists} />}>
          <ListsView lists={lists} />
        </ScrollView>

        <Slider
          minimumValue={5}
          maximumValue={20}
          step={5}
          value={value}
          onValueChange={value => setValue(value)}
        />

        <Text>{value}</Text>
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
