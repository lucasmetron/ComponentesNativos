import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';
import { ListsService } from './app/services/ListsService';
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

  useEffect(() => {
    getLists()
  }, [])

  const [value, setValue] = useState(false)

  useEffect(() => {
    console.log(value)
  }, [value])



  return (
    <SafeAreaView>
      <View>
        <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={getLists} />}>
          <ListsView lists={lists} />
        </ScrollView>

        <TouchableHighlight onPress={() => console.log('teste')} underlayColor='green'> {/*Fundo do botão altera de cor*/}
          <Text style={styles.button}>TouchableHighlight</Text>
        </TouchableHighlight>

        <TouchableOpacity> {/* Mais indicado para android e ios*/}
          <Text style={styles.button}>TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableNativeFeedback>  {/*precisa estar dentro de uma view e funciona no android */}
          <View>
            <Text style={styles.button}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback> {/*é pressionavel mas nao retorna feedback que foi pressionado*/}
          <Text style={styles.button}>TouchableWithoutFeedback</Text>
        </TouchableWithoutFeedback>

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
  button: {
    backgroundColor: 'red',
    color: 'white',
    width: 300,
    height: 60,
    marginBottom: 5,
    textAlign: 'center'
  }
});

export default App;
