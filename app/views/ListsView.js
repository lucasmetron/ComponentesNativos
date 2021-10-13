import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    Text
} from 'react-native';
import SimpleList from '../Components/SimpleList';

export default function ListsView(props) {

    const [lists, setLists] = useState([]);


    useEffect(() => {
        setLists(props.lists)
        console.log('lista from listView', lists)
    }, [props])


    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={lists}
                renderItem={({ item }) => <SimpleList list={item} onRemove={props.onRemove} onSelect={props.onSelect(item)} />}
                numColumns={3}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Text>Lista vazia :/</Text>}
            />
        </View>
    );
}