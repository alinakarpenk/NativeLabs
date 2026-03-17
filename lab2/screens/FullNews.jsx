import styled from "styled-components/native";
import React from "react";
import news from "../data/news.json"
import {View, Text} from "react-native";

const NewsImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`

const NewsText = styled.Text`
    font-size: 18px;
`

export default function FullNews({route}) {

    const {id} = route.params;

    const [data, setData] = React.useState(news.find(item => item.id === id));

    return (
        <View style={{padding:'18px'}}>
            <NewsImage source={{ uri: data.imgURL }} />
            <Text>{data.text}</Text>
            <NewsText>{data.fullText}</NewsText>
        </View>
    )
}