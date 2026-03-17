import styled from "styled-components/native";


export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: column;
    background-color: rgba(131, 131, 131, 0.46);
    padding: 10px;
`

export const Container = styled.SectionList`
    margin-top: 10px;
    display: flex;
    flex: 1;
`

export const TextView = styled.Text`
    font-size: 24px;
    color: white;
`

export const TextItems = styled.Text`
font-size: 16px;
`

export const Items = styled.View`
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

export const ImageView = styled.Image`
 width: 40px;
    height: 40px;
`