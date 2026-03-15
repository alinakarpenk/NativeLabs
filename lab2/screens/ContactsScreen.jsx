import {SectionList, View, Text, Image} from "react-native";
import contacts from "../data/contacts.json"
import styled from "styled-components/native";
export default function ContactsScreen(){
    return (
        <Container
            sections={contacts}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <Items>
                    <ImageView source={require("../assets/image/user (1).png" )}/>
                    <TextItems>{item}</TextItems>
                </Items>
            )}
            renderSectionHeader={({section: {title}}) => (
               <HeaderContainer>
                    <TextView>{title}</TextView>
               </HeaderContainer>
            )}
        />
    )
}

const HeaderContainer = styled.View`
    display: flex;
    flex-direction: column;
    background-color: rgba(131, 131, 131, 0.46);
    padding: 10px;
`

const Container = styled.SectionList`
    margin-top: 10px;
    display: flex;
    flex: 1;
`

const TextView = styled.Text`
    font-size: 24px;
    color: white;
`

const TextItems = styled.Text`
font-size: 16px;
`

const Items = styled.View`
    display: flex;
    flex-direction: row;
    gap: 10;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;
    border-bottom-style: solid;
    border-bottom-color: #bdb7b7;
    border-bottom-width: 1px;
`

const ImageView = styled.Image`
 width: 40px;
    height: 40px;
`