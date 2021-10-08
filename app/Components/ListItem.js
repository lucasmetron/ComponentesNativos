import React, { useState } from "react";
import {
    View,
    TextInput,
    Switch,
    Button
} from 'react-native';


export default function ListItem(props) {

    const [item, setItem] = useState({})

    function updateItem(field, value) {
        const newItem = Object.assign({}, props.item, { [field]: value })
        props.onUpdate(newItem);
        setItem(newItem)
    }

    function removeItem() {
        props.onRemove(props.item)
    }

    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
            <Switch
                value={item.done}
                onValueChange={(done) => updateItem('done', done)}
            />
            <TextInput
                style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Descrição"
                value={item.description}
                onChangeText={(text) => updateItem('description', text)}
                editable={!item.done}
            />
            <Button
                title='X'
                onPress={() => removeItem()}
                color='red'
            />
        </View>
    );
}