import {FlatList, StatusBar} from "react-native";
import {useApp} from "../components/AppProvider";
import TasksList from "../components/TasksList";

export default function ChallengeScreen() {
    const { tasks } = useApp()

    const tasksArray = Object.entries(tasks).map(([key, value]) => ({
        id: key,
        ...value
    }))

    return (

        <FlatList
            data={tasksArray}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TasksList
                   id={item.id}
                   current={item.current}
                   goal={item.goal}
                />
            )}
        />

    )
}