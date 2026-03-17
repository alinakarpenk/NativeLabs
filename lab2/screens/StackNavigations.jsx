import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NewsPage from "./NewsPage";
import FullNews from "./FullNews";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export function StackNavigations() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Новини" component={NewsPage} />
            <Stack.Screen name="FullNews" component={FullNews}/>
        </Stack.Navigator>
    )
}