import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1; 
    background-color: #F8F9FA;
    `

export const StatsCard = styled.View`
    margin: 16px; 
    padding: 16px; 
    background-color: #FFF; 
    border-radius: 12px; 
    elevation: 3;
`

export const StatsTitle = styled.Text`
    font-size: 16px; 
    font-weight: bold; 
    margin-bottom: 8px;
`

export const BreadcrumbContainer = styled.View`
    flex-direction: row; 
    align-items: center; 
    padding-horizontal: 16px; 
    margin-bottom: 10px;
`

export const UpButton = styled.TouchableOpacity`
    background-color: #34495E; 
    padding: 6px; 
    border-radius: 8px; 
    margin-right: 10px;
`

export const BreadcrumbText = styled.Text`
    font-size: 14px; 
    color: #7F8C8D; 
    flex: 1;
`

export const FileItem = styled.TouchableOpacity`
    flex-direction: row; 
    align-items: center; 
    background-color: #FFF; 
    padding: 16px; 
    margin-horizontal: 16px; 
    margin-bottom: 8px; 
    border-radius: 8px; 
    elevation: 1;
`


export const FileInfo = styled.View`
    flex: 1; 
    margin-left: 16px;
`


export const FileName = styled.Text`
    font-size: 16px; 
    font-weight: 500;
`

export const FileSize = styled.Text`
    font-size: 12px; 
    color: #95A5A6;
`

export const DeleteBtn = styled.TouchableOpacity`padding: 8px;`

export const ActionButtons = styled.View`
    flex-direction: row; 
    justify-content: space-around; 
    padding: 16px; 
    background-color: #FFF;
`

export const Fab = styled.TouchableOpacity`
    flex-direction: row; 
    align-items: center; 
    background-color: ${props => props.color || '#3498DB'}; 
    padding-vertical: 12px; 
    padding-horizontal: 20px; 
    border-radius: 24px;
`

export const FabText = styled.Text`
    color: #FFF; 
    font-weight: bold; 
    margin-left: 8px;
`

export const ModalBg = styled.View`
    flex: 1; 
    justify-content: center; 
    align-items: center; 
    background-color: rgba(0,0,0,0.5);
`

export const ModalContent = styled.View`
    width: 80%; 
    background-color: #FFF; 
    padding: 20px; 
    border-radius: 12px;
`

export const ModalTitle = styled.Text`
    font-size: 18px; 
    font-weight: bold; 
    margin-bottom: 16px; 
    text-align: center;
`

export const Input = styled.TextInput`
    border-width: 1px; 
    border-color: #DDD; 
    border-radius: 8px; 
    padding: 10px; 
    margin-bottom: 16px;
`


export const ModalButtons = styled.View`
    flex-direction: row; 
    justify-content: space-between;
`