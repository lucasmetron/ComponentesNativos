import React, { useEffect, useState } from "react";
import {
    TextInput,
    View,
    Text
} from "react-native";

export default function List(props) {

    const [list, setList] = useState([{ id: 123, title: 'lais' }])

    function updateList(field, value) {
        const item = Object.assign({}, list, { [field]: value })
        const newlist = () => { return { ...list, item } }
        // setList(list, list.title = newList)
        console.log(item)
    }

    useEffect(() => {
        if (props.list) {
            setList(props.list)
        }

    }, [props])

    return (
        <View style={{ flex: 1 }}>

            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, fontSize: 20, fontWeight: 'bold' }}
                    placeholder='Título'
                    onChangeText={text => updateList('title', text)}
                    value={list.title}
                />

                <Text>{list.title}</Text>
            </View>

        </View>
    );
}