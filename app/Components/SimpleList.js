import React, { useState } from 'react'
import {
    View,
    Text,
    Image,
    Dimensions
} from 'react-native'

export default function SimpleList(props) {
    const imageDefault = 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
    const window = Dimensions.get('window');
    const [list, setList] = useState(props.lists || { title: 'vazio' });


    return (
        <View style={{ width: (window.width / 3 - 8), margin: 2, marginBottom: 30, borderWidth: 1, borderColor: '#aaa', padding: 5 }}>
            <Image source={{ uri: list.picture || imageDefault }} style={{ height: window.width / 3 }} />
            <Text style={{ fontWeight: 'bold' }}>{list.title}</Text>
        </View>
    );
}