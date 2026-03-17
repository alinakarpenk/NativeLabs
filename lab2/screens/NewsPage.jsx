import {FlatList, RefreshControl, TouchableOpacity, View} from "react-native";
import React from "react";
import data from "../data/news.json";
import News from "../components/News";

export default function NewsPage({ navigation }) {

    const [posts, setPosts] = React.useState(data);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);


    return (
            <View>
                <FlatList
                    data={posts}
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