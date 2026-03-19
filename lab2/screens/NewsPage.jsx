import {FlatList, RefreshControl, TouchableOpacity, View, Text} from "react-native";
import React from "react";
import data from "../data/news.json";
import News from "../components/News";
import Header from "../components/Header";

export default function NewsPage({ navigation }) {

    const [posts, setPosts] = React.useState(data);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const loadMore = () => {
        const data = posts.map(post => ({
            ...post,
            id: post.id + Date.now() + Math.random()
        }))
        setPosts([...posts, ...data]);
    };


    return (
            <View>
                <FlatList
                    data={posts}
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={<Header title="Екран новин" show={false} showDrawer={true}/>}
                    ListFooterComponent={<Text>Футер новин</Text>}
                    ItemSeparatorComponent={<View style={{padding: 10, backgroundColor: "rgba(188,184,184,0.8)"}}/>}
                    initialNumToRender={5}
                    maxToRenderPerBatch={5}
                    windowSize={5}
                    onEndReached={loadMore}
                    onEndReachedThreshold={0.3}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => navigation.navigate('FullNews', { id: item.id })}>
                           <News title={item.title} text={item.text} imgURL={item.imgURL} date={item.date}/>
                        </TouchableOpacity>
                }
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}

                />
            </View>
    )
}