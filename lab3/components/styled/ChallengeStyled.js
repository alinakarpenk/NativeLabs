import styled from "styled-components/native";

export const ViewStyled = styled.View`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
    border-radius: 12px;
    background-color: #f5f5f5;
    elevation: 3;
    height: 80;
    align-items: center;
`

export const Title = styled.Text`
  font-size: 13px;
  font-weight: 500;
`

export const Progress = styled.Text`
  font-size: 13px;
  color: #555;
    position: absolute;
    right: 100px;
`