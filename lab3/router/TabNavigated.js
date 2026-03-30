import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import ClickerScreen from "../screens/ClickerScreen";
import ChallengeScreen from "../screens/ChallengeScreen";
import ThemeScreen from "../screens/ThemeScreen";
import {Ionicons} from "@expo/vector-icons";


const Tab = createBottomTabNavigator();


export default function TabNavigated() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Clicker') {
                            iconName = focused ? 'arrow-forward' : 'arrow-forward-outline';
                        } else if (route.name === 'Challenge') {
                            iconName = focused ? 'podium' : 'podium-outline';
                        } else if (route.name === 'Theme') {
                            iconName = focused ? 'color-palette' : 'color-palette-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Clicker" component={ClickerScreen}/>
                <Tab.Screen name="Challenge" component={ChallengeScreen} />
                <Tab.Screen name="Theme" component={ThemeScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}