import React, { useEffect, useState } from "react";
import {
    TextInput,
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Button,
    FlatList,
    SafeAreaView,
    ScrollView

} from "react-native";
import Clipboard from '@react-native-community/clipboard';
import ListItem from "./ListItem";

export default function List(props) {

    const imageDefault = 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
    const [list, setList] = useState({ items: [] })
    const [newItemDescription, setNewItemDescription] = useState("")


    useEffect(() => {
        if (props.list) {
            setList(props.list)
        }

    }, [props])

    useEffect(() => {
        console.log(list)
    }, [list])

    useEffect(() => {
        console.log(newItemDescription)
    })

    function onActionDone(list) {
        if (props.onActionDone) {
            props.onActionDone(list)
        }
    }

    function updateList(field, value) {
        const newList = Object.assign({}, list, { [field]: value })
        setList(newList)
    }

    function updateListItem(item) {
        const itemIndex = list.items.findIndex(listItem => listItem.id === item.id)
        const newListItems = [...list.items];
        if (itemIndex >= 0) {
            newListItems[itemIndex] = item;
        } else {
            newListItems.push(item);
        }
        updateList('items', newListItems);
    }

    function removeListItem(item) {
        const itemIndex = list.items.findIndex(listItem => listItem.id === item.id)
        const newListItems = [...list.items];
        newListItems.splice(itemIndex, 1);
        updateList('items', newListItems);
    }

    async function pasteImage() {
        const picture = await Clipboard.getString()
        const types = ['.png', '.jpeg', '.jpg']
        if (picture.startsWith('http') & types.some(type => picture.endsWith(type))) {
            updateList('picture', picture)
        }
    }

    function createListItem() {
        const description = newItemDescription
        if (description) {
            const newItem = { description: description, done: false, id: Date.now().toString() }
            updateListItem(newItem);
            setNewItemDescription('');
        }
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Button title="Voltar" onPress={() => onActionDone(props.list)} />

            <ScrollView style={{ flex: 1 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 20, fontWeight: 'bold' }}
                    placeholder='Título'
                    onChangeText={text => updateList('title', text)}
                    value={list.title}
                />
                <View style={{ flex: 1, flexDirection: 'row', padding: 5 }}>
                    <TouchableHighlight onPress={() => pasteImage()}>
                        <Image
                            source={{ uri: list.picture || imageDefault }}
                            style={{ width: 100, height: 100, marginRight: 10 }}
                        />
                    </TouchableHighlight>

                    <TextInput
                        style={{ flex: 1, borderColor: 'gray', borderWidth: 1, padding: 5 }}
                        placeholder='Descrição'
                        onChangeText={(text) => updateList('description', text)}
                        value={list.description}
                        numberOfLines={3}
                        multiline={true}
                    />
                </View>
                <View style={{ flex: 1, flexDirection: 'row', height: 40 }}>
                    <TextInput
                        style={{ height: 40, flex: 1, borderColor: 'gray', borderWidth: 1 }}
                        placeholder='Novo Item'
                        value={newItemDescription}
                        onChangeText={(text) => setNewItemDescription(text)}
                    />
                    {/* <TouchableOpacity onPress={createListItem} style={{ position: 'absolute', bottom: 0, backgroundColor: 'green' }} ><Text>Adicionar</Text></TouchableOpacity> */}
                    <Button title='+' onPress={() => createListItem()} color='green' />
                </View>
                <FlatList
                    style={{ flex: 1 }}
                    data={list.items}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ListItem item={item} onUpdate={updateListItem} onRemove={removeListItem} />}
                />
            </ScrollView>

            <Button title="Salvar" onPress={() => onActionDone(list)} />
        </SafeAreaView>
    );
}