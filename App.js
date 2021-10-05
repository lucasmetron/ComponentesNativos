import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl
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
    console.log('listsFromBD', listsFromBD)
    return listsFromBD
  }

  useEffect(() => {
    setLists(getLists());
  }, [])

  return (
    <SafeAreaView>
      <View>
        <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getLists()} />}>
          <ListsView lists={lists} />
          <Text>teste</Text>
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
});

export default App;
