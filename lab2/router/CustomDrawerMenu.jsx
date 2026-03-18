import {DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";

import styled from "styled-components/native";

const DrawerList = styled.View`
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10;
    margin-bottom: 20px;
`

const Avatar = styled.Image`
    width: 80px;
    height: 80px;
`

const Title = styled.Text`
    font-size: 20;
    font-weight: bold;
`

const Description = styled.Text`
    font-size: 15;
    font-weight: 200;
   
`


export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
           <DrawerList>
               <Avatar source={require("../assets/image/user (1).png")} />
               <Title>ВТ-22-2</Title>
               <Description>Аліна Карпенко</Description>
           </DrawerList>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}
