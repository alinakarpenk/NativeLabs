import {NavigationContainer} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import PostScreen from "../screens/PostScreen";
import GalleryScreen from "../screens/GalleryScreen";
import FormScreen from "../screens/FormScreen";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();


export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Post') {
                            iconName = focused ? 'newspaper' : 'newspaper-outline';
                        } else if (route.name === 'Gallery') {
                            iconName = focused ? 'images' : 'images-outline';
                        } else if (route.name === 'Form') {
                            iconName = focused ? 'person' : 'person-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Post" component={PostScreen}/>
                <Tab.Screen name="Gallery" component={GalleryScreen} />
                <Tab.Screen name="Form" component={FormScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}