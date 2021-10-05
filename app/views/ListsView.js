import React, { useState } from 'react';
import {
    View,
    FlatList,
    Text

} from 'react-native';
import SimpleList from '../Components/SimpleList';

export default function ListsView(props) {

    const [lists, setLists] = useState([]);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={lists}
                renderItem={({ item }) => <SimpleList list={item} />}
                numColumns={3}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>Lista vázia</Text>}
            />
        </View>
    );
}