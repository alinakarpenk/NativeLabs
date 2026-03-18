import {createDrawerNavigator} from "@react-navigation/drawer";
import ContactsScreen from "../screens/ContactsScreen";
import CustomDrawerMenu from "./CustomDrawerMenu"
import {StackNavigations} from "./StackNavigations";
const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {
    return (
            <Drawer.Navigator screenOptions={{ headerShown: false }}
                drawerContent={(props) => <CustomDrawerMenu {...props} />}>
                <Drawer.Screen
                   name="Новини"
                   component={StackNavigations}
                />
                <Drawer.Screen
                    name="Контакти"
                    component={ContactsScreen}
                />
            </Drawer.Navigator>
    )
}