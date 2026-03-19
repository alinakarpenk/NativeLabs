import styled from "styled-components/native";
import {StatusBar, TouchableOpacity, View} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import { DrawerActions } from '@react-navigation/native';


const ViewHeader = styled.View`
    background-color: rgba(159, 158, 158, 0.4);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px;
`

const TextView = styled.Text`
        font-weight: bold;
        font-size: 18px;
        position: relative;
        right: 100px;
    `

const ViewRight = styled.View`
     position: relative;
     right: 80px;
`

export default function Header({title, show, showDrawer}) {

    const navigation = useNavigation();

    return (
        <ViewHeader>
            <StatusBar barStyle="light-content" />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                {show ? ( <Ionicons name="arrow-back" size={24} color="black" />) : null}
            </TouchableOpacity>
            <ViewRight>
                {showDrawer && (
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Ionicons name="menu" size={24} color="black" />
                    </TouchableOpacity>
                )}
            </ViewRight>
            <TextView>
                {title}
            </TextView>

        </ViewHeader>

    )
}

