import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NewsPage from "../screens/NewsPage";
import FullNews from "../screens/FullNews";

const Stack = createNativeStackNavigator();

export function StackNavigations() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Новини" component={NewsPage} options={{headerShown: false}} />
            <Stack.Screen name="FullNews" component={FullNews} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}