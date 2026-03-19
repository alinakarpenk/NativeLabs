import {createDrawerNavigator} from "@react-navigation/drawer";
import ContactsScreen from "../screens/ContactsScreen";
import CustomDrawerMenu from "./CustomDrawerMenu"
import {StackNavigations} from "./StackNavigations";
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator()

export default function DrawerNavigator() {

    const navigation = useNavigation();

    return (
            <Drawer.Navigator screenOptions={{ headerShown: false }}
                drawerContent={(props) => <CustomDrawerMenu {...props} />}>
                <Drawer.Screen
                   name="Новини"
                   component={StackNavigations}
                   options={({ navigation }) => ({
                       headerLeft: () => (
                           <TouchableOpacity onPress={() => navigation.openDrawer()}>
                               <Ionicons name="arrow-back" size={24} color="black"/>
                           </TouchableOpacity>
                       ),
                   })}
                />
                <Drawer.Screen
                    name="Контакти"
                    component={ContactsScreen}
                />
            </Drawer.Navigator>
    )
}