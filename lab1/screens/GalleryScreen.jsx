import Layout from "../layout/Layout";
import React, {useState} from "react";
import images from '../data/images.json'
import styled from "styled-components/native";
import {FlatList} from "react-native";

const ImageView = styled.Image`
        width: 48%;
        height: 150px;
        margin-bottom: 10px;
    `

const ViewContainer = styled.View`
        display: flex;
        padding: 10px;
    `

export default function GalleryScreen() {

    const [image, setImage] = useState(images);

    return (
        <Layout>
        <ViewContainer>
            <FlatList
                data={image}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => <ImageView source={{uri: item.imgURL}} />}
                numsColumns={2}
            />
        </ViewContainer>
        </Layout>
    )
}
