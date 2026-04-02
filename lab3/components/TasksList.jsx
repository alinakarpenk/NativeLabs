import {Text, View} from "react-native";

export default function TasksList({id, current, goal}) {
    return (
        <View style={{ padding: 10 }}>
            <Text>{id}</Text>
            <Text>{current} / {goal}</Text>
            <Text>{current >= goal ? "✅ Виконано" : "❌"}</Text>
        </View>
    )
}