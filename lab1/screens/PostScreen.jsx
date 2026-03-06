import {FlatList, View} from "react-native";
import PostView from "../components/PostView";
import React from "react";
import data from "../data/news.json";
import Layout from "../layout/Layout";

export default function PostScreen(){

    const [posts, setPosts] = React.useState(data);

    return (
        <Layout>
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <PostView title={item.title} text={item.text} imgURL={item.imgURL} date={item.date}/>}
            />
        </View>
        </Layout>
    )
}