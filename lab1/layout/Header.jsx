import {Image} from "react-native";
import styled from "styled-components/native";

export default function Header() {

    const ViewHeader = styled.View`
        background-color: '#fff';
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom-color: #9f9e9e;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    `

    const TextView = styled.Text`
        font-weight: bold;
        font-size: 18px;
        position: relative;
        right: 50px;
    `

    const ViewImage = styled.Image`
        width: 100;
        height: 100;
        position: relative;
        left: 30px;
    `

    return (

        <ViewHeader>
            <ViewImage source={require('../assets/images/logo.png')} resizeMode={'contain'} />
            <TextView>
                FirstModileApp
            </TextView>
        </ViewHeader>

    )
}

