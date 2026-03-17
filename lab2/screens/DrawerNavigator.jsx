import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import NewsPage from "./NewsPage";
import ContactsScreen from "./ContactsScreen";
import {StackNavigations} from "./StackNavigations";

const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    return (
            <Drawer.Navigator screenOptions={{ headerShown: false }}>
                <Drawer.Screen
                   name="NewsStack"
                   component={StackNavigations}
                />
                <Drawer.Screen
                    name="Contacts"
                    component={ContactsScreen}
                />
            </Drawer.Navigator>
    )
}